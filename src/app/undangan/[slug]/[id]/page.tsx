import Diamond from "@/templates/diamond";
import Elegant from "@/templates/elegant";
import Classic from "@/templates/classic";

interface Props {
  params: {
    slug: string;
    id: string;
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'diamond', id: 'abc' },
    { slug: 'elegant', id: 'xyz' },
    { slug: 'classic', id: '123' },
  ];
}

export default function UndanganPage({ params }: Props) {
  const { slug, id } = params;

  const templates: Record<string, any> = {
    diamond: Diamond,
    elegant: Elegant,
    classic: Classic,
  };

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
