import Image from "next/image";
import  bluepic from '../../../public/images/Frame (9).png'
export default function Bluepic() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Image
        src={bluepic}  // Corrected path (without the curly braces)
        alt="bluepic"
        width={1344}  // Adjust width as needed
        height={977} // Adjust height as needed
        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
      />
      <br />
    </div>
  );
}
