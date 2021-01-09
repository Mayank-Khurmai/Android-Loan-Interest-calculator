
        function camount()
        {
            document.getElementById("oamount").innerHTML = document.getElementById("camount").value;
        }

        function crate()
        {
            document.getElementById("orate").innerHTML = document.getElementById("crate").value;
        }

        function centry()
        {
            var edate = new Date(document.getElementById("centry").value);
            var a = edate.getDate();
            var b = edate.toLocaleString('default', { month: 'short' });
            var c = edate.getFullYear();
            document.getElementById("oentry").innerHTML = a +"-"+ b +"-"+ c;
        }

        function cexit()
        {
            var edate = new Date(document.getElementById("cexit").value);
            var a = edate.getDate();
            var b = edate.toLocaleString('default', { month: 'short' });
            var c = edate.getFullYear();
            document.getElementById("oexit").innerHTML = a +"-"+ b +"-"+ c;
        }

        

        function final_calculate()
        {
            var date1 = new Date(document.getElementById("centry").value);
            var date2 = new Date(document.getElementById("cexit").value);

            // Get Difference Between Dates
            var diff = (Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) ) /(1000 * 60 * 60 * 24)))+1;
            
            // Calculating According to Year and Date
            if(diff>0 && diff<=30)
            {
                document.getElementById("odays").innerHTML = diff + " Days" + " (<font color='red'>Full Month</font>)";
                var p = document.getElementById("camount").value;
                var r = document.getElementById("crate").value;

                var i1 = ((p/100)*(r)*30)/30;

                document.getElementById("oti").innerHTML = i1.toFixed(2);
                document.getElementById("ofa").innerHTML = (Number(p) + Number(i1)).toFixed(2);
            }
            else if(diff>30 && diff<=365)
            {
                document.getElementById("odays").innerHTML = diff + " Days";
                var p = document.getElementById("camount").value;
                var r = document.getElementById("crate").value;

                var i1 = ((p/100)*(r)*diff)/30;         // For 1st Year

                document.getElementById("oti").innerHTML = i1.toFixed(2);
                document.getElementById("ofa").innerHTML = (Number(p) + Number(i1)).toFixed(2);
            }
            else if(diff>365 && diff<=730)
            {
                diff = diff-365;
                document.getElementById("odays").innerHTML = "1 Year " + diff + " Days";
                var p = Number(document.getElementById("camount").value);
                var r = Number(document.getElementById("crate").value);

                var i1 = ((p/100)*(r)*365)/30;       // For 1st Year
                var i2 = (((p+i1)/100)*(r)*diff)/30;      // For 2nd Year
                document.getElementById("oti").innerHTML = (i1+i2).toFixed(2);
                document.getElementById("ofa").innerHTML = (Number(p) + Number(i1 + i2)).toFixed(2);
            }
            else if(diff>730 && diff<=1095)
            {
                diff = diff-730;
                document.getElementById("odays").innerHTML = "2 Year " + diff + " Days";
                var p = Number(document.getElementById("camount").value);
                var r = Number(document.getElementById("crate").value);

                var i1 = ((p/100)*(r)*365)/30;       // For 1st Year
                var i2 = (((p+i1)/100)*(r)*365)/30;      // For 2nd Year
                var i3 = (((p+i1+i2)/100)*(r)*diff)/30;      // For 3rd Year
                document.getElementById("oti").innerHTML = (i1+i2+i3).toFixed(2);
                document.getElementById("ofa").innerHTML = (Number(p) + Number(i1+i2+i3)).toFixed(2);
            }
            else if(diff>1095 && diff<=1460)
            {
                diff = diff-1095;
                document.getElementById("odays").innerHTML = "3 Year " + diff + " Days";
                var p = Number(document.getElementById("camount").value);
                var r = Number(document.getElementById("crate").value);

                var i1 = ((p/100)*(r)*365)/30;       // For 1st Year
                var i2 = (((p+i1)/100)*(r)*365)/30;      // For 2nd Year
                var i3 = (((p+i1+i2)/100)*(r)*365)/30;      // For 3rd Year
                var i4 = (((p+i1+i2+i3)/100)*(r)*diff)/30;      // For 4th Year
                document.getElementById("oti").innerHTML = (i1+i2+i3+i4).toFixed(2);
                document.getElementById("ofa").innerHTML = (Number(p) + Number(i1+i2+i3+i4)).toFixed(2);
            }
            else if(diff>1460 && diff<=1825)
            {
                diff = diff-1460;
                document.getElementById("odays").innerHTML = "4 Year " + diff + " Days";
                var p = Number(document.getElementById("camount").value);
                var r = Number(document.getElementById("crate").value);

                var i1 = ((p/100)*(r)*365)/30;       // For 1st Year
                var i2 = (((p+i1)/100)*(r)*365)/30;      // For 2nd Year
                var i3 = (((p+i1+i2)/100)*(r)*365)/30;      // For 3rd Year
                var i4 = (((p+i1+i2+i3)/100)*(r)*365)/30;      // For 4th Year
                var i5 = (((p+i1+i2+i3+i4)/100)*(r)*diff)/30;      // For 5th Year
                document.getElementById("oti").innerHTML = (i1+i2+i3+i4+i5).toFixed(2);
                document.getElementById("ofa").innerHTML = (Number(p) + Number(i1+i2+i3+i4+i5)).toFixed(2);
            } 
            else if(diff>1825 && diff<=2190)
            {
                diff = diff-1825;
                document.getElementById("odays").innerHTML = "5 Year " + diff + " Days";
                var p = Number(document.getElementById("camount").value);
                var r = Number(document.getElementById("crate").value);

                var i1 = ((p/100)*(r)*365)/30;       // For 1st Year
                var i2 = (((p+i1)/100)*(r)*365)/30;      // For 2nd Year
                var i3 = (((p+i1+i2)/100)*(r)*365)/30;      // For 3rd Year
                var i4 = (((p+i1+i2+i3)/100)*(r)*365)/30;      // For 4th Year
                var i5 = (((p+i1+i2+i3+i4)/100)*(r)*365)/30;      // For 5th Year
                var i6 = (((p+i1+i2+i3+i4+i5)/100)*(r)*diff)/30;      // For 6th Year
                document.getElementById("oti").innerHTML = (i1+i2+i3+i4+i5+i6).toFixed(2);
                document.getElementById("ofa").innerHTML = (Number(p) + Number(i1+i2+i3+i4+i5+i6)).toFixed(2);
            }
            else if(diff>2190 && diff<=2555)
            {
                diff = diff-2190;
                document.getElementById("odays").innerHTML = "6 Year " + diff + " Days";
                var p = Number(document.getElementById("camount").value);
                var r = Number(document.getElementById("crate").value);

                var i1 = ((p/100)*(r)*365)/30;       // For 1st Year
                var i2 = (((p+i1)/100)*(r)*365)/30;      // For 2nd Year
                var i3 = (((p+i1+i2)/100)*(r)*365)/30;      // For 3rd Year
                var i4 = (((p+i1+i2+i3)/100)*(r)*365)/30;      // For 4th Year
                var i5 = (((p+i1+i2+i3+i4)/100)*(r)*365)/30;      // For 5th Year
                var i6 = (((p+i1+i2+i3+i4+i5)/100)*(r)*365)/30;      // For 6th Year
                var i7 = (((p+i1+i2+i3+i4+i5+i6)/100)*(r)*diff)/30;      // For 7th Year
                document.getElementById("oti").innerHTML = (i1+i2+i3+i4+i5+i6+i7).toFixed(2);
                document.getElementById("ofa").innerHTML = (Number(p) + Number(i1+i2+i3+i4+i5+i6+i7)).toFixed(2);
            } 
            else if(diff>2555 && diff<=2920)
            {
                diff = diff-2555;
                document.getElementById("odays").innerHTML = "7 Year " + diff + " Days";
                var p = Number(document.getElementById("camount").value);
                var r = Number(document.getElementById("crate").value);

                var i1 = ((p/100)*(r)*365)/30;       // For 1st Year
                var i2 = (((p+i1)/100)*(r)*365)/30;      // For 2nd Year
                var i3 = (((p+i1+i2)/100)*(r)*365)/30;      // For 3rd Year
                var i4 = (((p+i1+i2+i3)/100)*(r)*365)/30;      // For 4th Year
                var i5 = (((p+i1+i2+i3+i4)/100)*(r)*365)/30;      // For 5th Year
                var i6 = (((p+i1+i2+i3+i4+i5)/100)*(r)*365)/30;      // For 6th Year
                var i7 = (((p+i1+i2+i3+i4+i5+i6)/100)*(r)*365)/30;      // For 7th Year
                var i8 = (((p+i1+i2+i3+i4+i5+i6+i7)/100)*(r)*diff)/30;      // For 8th Year
                document.getElementById("oti").innerHTML = (i1+i2+i3+i4+i5+i6+i7+i8).toFixed(2);
                document.getElementById("ofa").innerHTML = (Number(p) + Number(i1+i2+i3+i4+i5+i6+i7+i8)).toFixed(2);
            }  
            else if(diff>2920 && diff<=3285)
            {
                diff = diff-2920;
                document.getElementById("odays").innerHTML = "8 Year " + diff + " Days";
                var p = Number(document.getElementById("camount").value);
                var r = Number(document.getElementById("crate").value);

                var i1 = ((p/100)*(r)*365)/30;       // For 1st Year
                var i2 = (((p+i1)/100)*(r)*365)/30;      // For 2nd Year
                var i3 = (((p+i1+i2)/100)*(r)*365)/30;      // For 3rd Year
                var i4 = (((p+i1+i2+i3)/100)*(r)*365)/30;      // For 4th Year
                var i5 = (((p+i1+i2+i3+i4)/100)*(r)*365)/30;      // For 5th Year
                var i6 = (((p+i1+i2+i3+i4+i5)/100)*(r)*365)/30;      // For 6th Year
                var i7 = (((p+i1+i2+i3+i4+i5+i6)/100)*(r)*365)/30;      // For 7th Year
                var i8 = (((p+i1+i2+i3+i4+i5+i6+i7)/100)*(r)*365)/30;      // For 8th Year
                var i9 = (((p+i1+i2+i3+i4+i5+i6+i7+i8)/100)*(r)*diff)/30;      // For 9th Year
                document.getElementById("oti").innerHTML = (i1+i2+i3+i4+i5+i6+i7+i8+i9).toFixed(2);
                document.getElementById("ofa").innerHTML = (Number(p) + Number(i1+i2+i3+i4+i5+i6+i7+i8+i9)).toFixed(2);
            }    
            else if(diff>3285 && diff<=3650)
            {
                diff = diff-3285;
                document.getElementById("odays").innerHTML = "9 Year " + diff + " Days";
                var p = Number(document.getElementById("camount").value);
                var r = Number(document.getElementById("crate").value);

                var i1 = ((p/100)*(r)*365)/30;       // For 1st Year
                var i2 = (((p+i1)/100)*(r)*365)/30;      // For 2nd Year
                var i3 = (((p+i1+i2)/100)*(r)*365)/30;      // For 3rd Year
                var i4 = (((p+i1+i2+i3)/100)*(r)*365)/30;      // For 4th Year
                var i5 = (((p+i1+i2+i3+i4)/100)*(r)*365)/30;      // For 5th Year
                var i6 = (((p+i1+i2+i3+i4+i5)/100)*(r)*365)/30;      // For 6th Year
                var i7 = (((p+i1+i2+i3+i4+i5+i6)/100)*(r)*365)/30;      // For 7th Year
                var i8 = (((p+i1+i2+i3+i4+i5+i6+i7)/100)*(r)*365)/30;      // For 8th Year
                var i9 = (((p+i1+i2+i3+i4+i5+i6+i7+i8)/100)*(r)*365)/30;      // For 9th Year
                var i10 = (((p+i1+i2+i3+i4+i5+i6+i7+i8+i9)/100)*(r)*diff)/30;      // For 10th Year
                document.getElementById("oti").innerHTML = (i1+i2+i3+i4+i5+i6+i7+i8+i9+i10).toFixed(2);
                document.getElementById("ofa").innerHTML = (Number(p) + Number(i1+i2+i3+i4+i5+i6+i7+i8+i9+i10)).toFixed(2);
            }              
            else
            {
                if(document.getElementById("camount").value ==""){
                    document.getElementById("oamount").innerHTML = "<font color='red'>-------</font>";
                }
                if(document.getElementById("crate").value ==""){
                    document.getElementById("orate").innerHTML = "<font color='red'>-------</font>";
                }
                
                document.getElementById("oentry").innerHTML = "<font color='red'>-------</font>";
                document.getElementById("oexit").innerHTML = "<font color='red'>-------</font>";
                document.getElementById("odays").innerHTML = "<font color='red'>-------</font>";
                document.getElementById("oti").innerHTML = "<font color='red'>-------</font>";
                document.getElementById("ofa").innerHTML = "<font color='red'>-------</font>";
            }          
        }
