const holidays =[
{1:["New Years Day"],15:["MLK Day"]},
{19:["Washington's Birthday"]},
{30:["Good Friday"]},
{},
{28:["Memorial Day"]},
{},
{4:["Independance Day"]},
{},
{3:["Labor Day"]},
{},
{22:["Thanksgiving"]},
{25:["Christmas"]}
];

export const generateRowData=(month,year) =>{
    // general starting data
    const first_day = new Date(year, month, 1).getDay();
    const max_day= new Date(year, month+1, 0).getDate();
    let start_point=0;
    let day_iterator=1;

    //populates days in calendar
    let row_dict=[];
    for (let row=0;row<=5;row++){
        let row_array=[];
        for (let cell=0;cell<=6;cell++){
            if (start_point<first_day){
                row_array.push('');
                start_point++;
            }
            
            else if(day_iterator>max_day){    
                row_array.push('');
                
            }
            else{
                row_array.push(day_iterator);
                day_iterator++;
            }
        }

     // take populated row array and push to dict
     row_dict[row]=row_array;   
    }
   return row_dict;
};

export const getDaysLeft=() =>{
    const days_available=calculate_days_available();
    const days_left=calculate_days_left(days_available);
    return days_left;
         
};

function calculate_days_left(days_available){
    var days_left=[];

    for (var i=0;i<=11;i++){
        days_left[i]=aggregate_days(days_available,i);
    }
    return days_left
}

function aggregate_days(days_available,index){
    var sum=0;
    for (var x=index; x>0 ;x--){
        sum+=days_available[x];
    }
    return sum;
}


function calculate_days_available(){
//return days left array for the month
    var days_available=[];
    days_available.push(0);

    for (var i=1;i<11;i++){
        days_available.push(2);
    }
    days_available.push(0);
    days_available.push(0);

    return days_available;
}

export const getHolidayData=() =>{
    return holidays;
}

