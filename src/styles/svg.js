export default function Roundedsvg({text1,text2,color1,color2}){

    return <svg width="8.9rem" height="8.9rem" className="rounded-circle shadow-lg" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
    <circle cx="90" cy="90" r="88" stroke="#3d83a6" strokeWidth="4" fill="none" strokeDasharray="555" strokeDashoffset="535" strokeLinecap="round" >
      <animate attributeName="stroke-dashoffset" from="502.65" to="0" dur="2s" fill="freeze" />
    </circle>
    <text x="90" y="75" textAnchor="middle" fill={color1} dominantBaseline="middle"> {text1}</text>
    <text x="90" y="115" textAnchor="middle" fill={color2} dominantBaseline="middle">{text2}</text>
  </svg>
  
}