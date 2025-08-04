import Diamond from "@/templates/diamond";
import Elegant from "@/templates/elegant";
import Classic from "@/templates/classic";

interface PageProps {
  params: {
    slug: string;
    id: string;
  };
}

export default function UndanganPage({ params }: PageProps) {
  const { slug, id } = params;

  let TemplateComponent;

  switch (slug) {
    case "diamond":
      TemplateComponent = Diamond;
      break;
    case "elegant":
      TemplateComponent = Elegant;
      break;
    case "classic":
      TemplateComponent = Classic;
      break;
    default:
      return (
        <div className="text-center mt-20 text-red-600">
          <h2 className="text-2xl font-bold">Template tidak ditemukan</h2>
          <p>Slug: {slug}</p>
        </div>
      );
  }

  return <TemplateComponent id={id} />;
}
