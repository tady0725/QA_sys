function sub() {  
    $.ajax({  
            cache: true,  
            type: "POST",  
            url:"http://172.31.4.149:5000/second",  
            data:$('#formId').serialize(),// 你的formid  
            async: false,  
            error: function(request) {  
                alert("Connection error:"+request.error);  
            },  
            success: function(response) {  
                console.log(response);
                console.log(response[0].l);
 
              
              $("#q1").html(response[0].t);
                 $("#q3").html(response[0].m);
                 $( "#q2" ).html(response[0].l);
            
                 
               

                //alert("SUCCESS!");  
            }  
           
        });   

         
}  