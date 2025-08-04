import Diamond from "@/templates/diamond";
import Elegant from "@/templates/elegant";
import Classic from "@/templates/classic";

interface Props {
  params: {
    slug: string;
    id: string;
  };
}

// Tentukan tipe props untuk setiap komponen template
type TemplateComponentProps = {
  id: string;
};

// Map slug ke komponen dengan tipe aman
const templates: Record<string, React.ComponentType<TemplateComponentProps>> = {
  diamond: Diamond,
  elegant: Elegant,
  classic: Classic,
};

export async function generateStaticParams() {
  return [
    { slug: "diamond", id: "abc" },
    { slug: "elegant", id: "xyz" },
    { slug: "classic", id: "123" },
  ];
}

export default function UndanganPage({ params }: Props) {
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
}
