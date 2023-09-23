
        var a = 12;
        const b = 10;
        let c = 30;
        var d = 40;

        document.write(`<p>a=${a}</p>`);
        document.write(`<p>b=${b}</p>`);
        document.write(`<p>c=${c}</p>`);
        document.write(`<p>d=${d}</p> <hr>`);
    
        if(d>10)
        {
        document.write(`<p>a=${a}</p>`);
        document.write(`<p>b=${b}</p>`);
        document.write(`<p>c=${c}</p>`);
        document.write(`<p>d=${d}</p> <hr>`);
        var x = 100;
        let y = 200;
        const z = 300;
        
        document.write(`<p>x = ${x}</p>`);
        document.write(`<p>y=${y}</p>`);
        document.write(`<p>z=${z}</p> <hr>`);

        }
        document.write(`<p>x=${x}</p>`);
        //document.write(`<p>y=${y}</p>`);
       // document.write(`<p>z=${z}</p>`);
    
        var boolean = true;
        var isAdmin = false;
        document.write(`<p>isAdmin = ${typeof(isAdmin)}</p>`);
        document.write(`<p>isAdmin = ${isAdmin}</p>`);

        var title = "welcome to js";
        document.write(`<p>title= ${typeof(title)}</p>`);
        document.write(`<p>title = ${title}</p>`);

        var xx = 100;
        document.write(`<p>xx= ${typeof(xx)}</p>`);
        document.write(`<p>xx = ${xx}</p>`);

        var yy = 100.00;
        document.write(`<p>yy= ${typeof(yy)}</p>`);
        document.write(`<p>yy = ${yy}</p>`);

        //Array
        var colors = ["orange","blue","red","green", 100, true, 0.11]
        document.write(`<p>colors= ${typeof(colors)}</p>`);
        document.write(`<p>yy = ${colors}</p>`);
        

        //object
        var user = {
            //key : value => property
            name: "ramesh",
            email: "abc@gmail.com"
        };
        document.write(`<p>user= ${typeof(user)}</p>`);
        document.write(`<p>user = ${user}</p>`);
        

        
        // function block = behaviors
        // function name = name (params)

        function defaultFun()  // function declaration
        {  
            document.write(`<p>This is default</p>`);
        }
        defaultFun(); // function calling

        function ParameterFun(name, email)  // function declaration
        {  
            document.write(`<p>This is Parameterized function..</p>`);
            document.write(`<p> First parameter is : ${name}</p>`);
            document.write(`<p> Second parameter is : ${email}</p>`);
        }
        ParameterFun("js", "abc@gmail.com"); // function calling
    