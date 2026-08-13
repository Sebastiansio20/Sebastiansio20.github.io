import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkDetailContent from "@/components/WorkDetailContent";
import { en } from "@/lib/translations";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return en.work.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = en.work.projects.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Case study" };
  }
  return {
    title: `${project.title} — Case study`,
    description: project.description,
  };
}

export default async function WorkDetail({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = en.work.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <WorkDetailContent slug={slug} />;
}
