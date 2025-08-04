'use client'

import { useParams } from 'next/navigation';
import { templates } from '@/data/templates'
import dynamic from 'next/dynamic';

export default function TemplatePage() {
  const { slug } = useParams();
  const template = templates.find((item) => item.slug === slug);

  if (!template) {
    return <div className="text-center mt-10">Template tidak ditemukan</div>;
  }

  const CoverComponent = dynamic(() => import(`@/templates/${slug}/Cover`), {
    ssr: false,
  });

  return (
    <div>
      <CoverComponent />
    </div>
  );
}
