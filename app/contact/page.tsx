import { ContactClient } from '@/components/contact-client';

export const metadata = {
  title: 'Contacto',
  description: '¿Tienes un proyecto en mente? Me encantaría escucharlo. Contáctame y trabajemos juntos.',
  openGraph: {
    title: 'Contacto | Portfolio',
    description: '¿Tienes un proyecto en mente? Me encantaría escucharlo. Contáctame y trabajemos juntos.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
