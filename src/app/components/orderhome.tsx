import Image from "next/image";
import fourpic from '../../../public/images/Frame (8).png'
export default function Fourmanpic() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Image
        src={fourpic}  // Corrected path (without the curly braces)
        alt="menwalk"
        width={1440}  // Adjust width as needed
        height={5442} // Adjust height as needed
        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
      />
    </div>
  );
}
