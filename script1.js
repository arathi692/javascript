{
    let myForm = document.getElementById('myForm');
    console.log("form:",myForm);

     myForm.addEventListener('submit',function(e){
        e.preventDefault();//stops default behaviour form

        var datas={};
        let arr=[];

        let firstname = document.getElementById('firstname');
        let firstname_value=firstname.value;
        console.log("firstname :",firstname_value);

        let lastname = document.getElementById('lastname');
        let  lastname_value=lastname.value;
        console.log("lastname :",lastname_value);


        let place = document.getElementById('place');
        let place_value=place.value;
        console.log("place :",place_value);

        let phone = document.getElementById('phone');
        let phone_value=phone.value;
        console.log("phone :",phone_value);

        let age = document.getElementById('age');
        let age_value=age.value;
        console.log("phone :",age_value);

        let email = document.getElementById('email');
        let email_value=email.value;
        console.log("email :",email_value);


        let password=document.getElementById('password');
        let password_value=password.value;
        console.log("password:",password_value);

        datas.firstname = firstname_value;
        datas.lastname = lastname_value;
        datas.place = place_value;
        datas.phone = phone_value;
        datas.email =email_value;
        datas.password=password_value;
        datas.age= age_value;

        // console.log("datas:",datas);
        handleDatas(datas);//to push obj to array
    });

    function handleDatas(datas){
        console.log("datas :",datas);
        let message = document.getElementById('message');
        

        //validation
        if(arr.length > 0){
            for(let i =0;i<arr.length;i++){
                if(arr[i].email == datas.email){
                    message.innerHTML ="email already found";
                    return;

                }
                
                
            }
        }

        arr.push(datas);
        message.innerHTML="sucess";
        console.log("arr :",arr);
    }
    }
