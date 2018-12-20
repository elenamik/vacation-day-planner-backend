export const holidays =[
    {month:1, day:1, text:["New Years Day"]},
    {month:1, day:15, text:["MLK Day"]},
    {month:2, day:19, text:["Washington's Birthday"]},
    {month:3, day:30, text:["Good Friday"]},
    {month:5, day:28, text:["Memorial Day"]},
    {month:6, day:4, text:["Independance Day"]},
    {month:8, day:3, text:["Labor Day"]},
    {month:10, day:22, text:["Thanksgiving"]},
    {month:11, day:25, text:["Christmas"]},
];

let events={}; // array of dictionaries
for (let i=0; i<=11;i++){
    events[i]={};
}
export default events;

