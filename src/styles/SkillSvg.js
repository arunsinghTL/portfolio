export default function SkillSvg({text}){
    const textarray = text.split(" ");
    return <svg width="13rem" height="13rem" className="rounded-circle fs-4 shadow-lg" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
    <circle cx="90" cy="90" r="88" stroke="#000" strokeWidth="8" fill="none" strokeDasharray="555" strokeDashoffset="535" strokeLinecap="round" >
      <animate attributeName="stroke-dashoffset" from="502.65" to="0" dur="1s" fill="freeze" />
    </circle>
    <text x="90" y={`${ !textarray[1] ? "100": "75"}`} textAnchor="middle" fill="#3d89a3" dominantBaseline="middle">{textarray[0]}</text>
    <text x="90" y="115" textAnchor="middle" fill="#000" dominantBaseline="middle">{textarray[1]}</text>
  </svg>
}