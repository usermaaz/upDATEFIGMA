
import Image from "next/image";
import menpic from '../../app/image.png'
export default function Menpic() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Image
        src={menpic}  // Corrected path (without the curly braces)
        alt="menwalk"
        width={1344}  // Adjust width as needed
        height={925} // Adjust height as needed
        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
      />
    </div>
  );
}
