class RegValidation
  {
    ageValidation()
    {
        let dob = new Date(document.getElementById("Dob").value);
        let curDate = new Date();
        let age1 =(curDate.getTime() - dob.getTime()) / (24*60*60*1000*365);
        let age=Math.floor(age1);
        let ageMsg= ""
        if (!age>18)
        {
          ageMsg="Not Eligible";
        }
        document.getElementById("ageMsg").innerHTML=ageMsg;
    }

    mobValidation()
    {
      let mobPtn= /[6-9]{1}[0-9]{9}$/;
      let mob = document.getElementById("mob").value;
      let mobileNum = mob.trim();
      let msg = "";
      if(!mobPtn.test(mobileNum))
      {
        msg="Invalid Mobile Number";
      }
      document.getElementById("mobMsg").innerHTML = msg;
    }

    emailValidation()
    {
      let pattern= /^[a-zA-Z]+[a-zA-Z0-9._]+@[a-z]+[.]+[a-z]{2,3}$/;
      let email= document.getElementById("email").value;
      let emailId = email.trim();
      let emailResult="";
      if(!pattern.test(emailId))
      {
        emailResult="Invalid email";
      }
      document.getElementById("emailResult").innerHTML=emailResult;
    }

    aadharValidation()
    {
        let condition= /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
        let aadhar=document.getElementById("aadhar").value;
        let aadharNum = aadhar.trim();
        let aadharResult="";
        
        if(!condition.test(aadharNum))
        {
            aadharResult="Invalid Aadhar";
        }
        document.getElementById("aadharMsg").innerHTML=aadharResult;
    }

    pancardValidation()
    {
        let ptn=/[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        let pan=document.getElementById("pan").value;
        let panCard= pan.trim();
        let PanResult="";
        if (!ptn.test(panCard))
        {
            PanResult="Invalid Pan Number"
        }
        document.getElementById("panResult").innerHTML=PanResult;
    } 
  }
      function regSubmit()
      {
        let regVal = new RegValidation();
        regVal.ageValidation();
        regVal.mobValidation();
        regVal.emailValidation();
        regVal.aadharValidation();
        regVal.pancardValidation();
      }
    