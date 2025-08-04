import CoverScreen from '@/components/CoverScreen'

export default function ClassicTemplate() {
  const handleOpen = () => {
    // logika buka undangan
  }

  return (
    <CoverScreen
      groomName="Andi"
      brideName="Siti"
      date="10 Agustus 2025"
      location="Gedung Serbaguna, Bandung"
      onOpenInvitation={handleOpen}
    />
  )
}
