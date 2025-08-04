import Diamond from "@/templates/diamond";
import Elegant from "@/templates/elegant";
import Classic from "@/templates/classic";
import { type FC } from "react";

export async function generateStaticParams() {
  return [
    { slug: "diamond", id: "abc" },
    { slug: "elegant", id: "xyz" },
    { slug: "classic", id: "123" },
  ];
}

interface UndanganPageProps {
  params: {
    slug: string;
    id: string;
  };
}

// Mapping template
const templates: Record<string, FC<{ id: string }>> = {
  diamond: Diamond,
  elegant: Elegant,
  classic: Classic,
};

const UndanganPage: FC<UndanganPageProps> = ({ params }) => {
  const { slug, id } = params;
  const TemplateComponent = templates[slug];

  if (!TemplateComponent) {
    return (
      <div className="text-center mt-20 text-red-600">
        <h2 className="text-2xl font-bold">Template tidak ditemukan</h2>
        <p>Slug: {slug}</p>
      </div>
    );
  }

  return <TemplateComponent id={id} />;
};

export default UndanganPage;
