/**
* app Module
*
* Description
*/
angular.module('app', [])
.controller('test1', [function(){
    // console.log('hello');
    //$scope.name=$scope.texttt;
    var self=this;
    self.name="Ryan";
    self.click=function(){
        //alert('test click');
        self.name="Change";
    };

    // self.insert=function(){
    //     //alert('test click');
    //     self.nodes.push({id:1,label:"I am one",done:false});
    // };

    // self.nodes=[
    // {id:1,label:"I am one",done:false,assignee:'done'},
    // {id:2,label:"I am two",done:true},
    // {id:3,label:"I am three",done:false,assignee:'process'}
    // ];



    // //error????!!!! can not work
    // self.nodes2=[
    //     {author:"som",id:1,label:'first'},
    //     {author:"Mpple",id:3,label:'three'},
    //     {author:"bobs",id:2,label:'second'}
    // ];

    var testnodes=[
    {author:"som",id:1,label:'first',num:111,done:false},
    {author:"Mpple",id:3,label:'three',num:122,done:true},
    {author:"bobs",id:2,label:'second',num:133,done:false}
    ];

    self.notes1=angular.copy(testnodes);
    self.notes2=angular.copy(testnodes);


    self.changeNode=function(){
        testnodes=
        [
        {author:"som",id:1,label:'first change',num:211,done:false},
        {author:"Mpple",id:3,label:'three change',num:222,done:true},
        {author:"bobs",id:2,label:'second change',num:233,done:false}
        ];
        self.notes1=angular.copy(testnodes);
        self.notes2=angular.copy(testnodes);
    };


    self.getNodeClass=function(color)
    {
        if(color)
            return "done";
        else
            return "process";
    };

    self.testnode3=[
    {author:"som",id:1,label:'first',num:111,done:true},
    {author:"Mpple",id:3,label:'three',num:122,done:true},
    {author:"bobs",id:2,label:'second',num:133,done:false}
    ];

    self.clean3=function(){
        self.username="";
        self.password="";
    };

    self.submit3=function(){
        alert("Your ID is "+self.username +" and your pw is : "+self.password);

    };

    self.submit4=function(){
        //alert("Your data is "+self.user);
        console.log("data4",self.test4);
        console.log(self.test4["username"]);

    };

    self.submit41=function(){
        //alert("Your data is "+self.user);
        console.log("data41",self.test41);

    };

    self.submit43=function(){
        //alert("Your data is "+self.user);
        console.log("data43",self.test43);

    };

    self.sports=
    [
    {id:1,label:"aa",selected:"YES"},
    {id:2,label:"bb",selected:"NO"},
    {id:3,label:"cc",selected:"NO"},
    {id:4,label:"dd",selected:"YES"}
    ];

    self.countries=
    [
    {id:1,label:'UK'},
    {id:2,label:'JP'},
    {id:3,label:'GE'},
    {id:4,label:'TW'}
    ];

    self.selectCountryID=2;
    self.selectCountry=self.countries[1];


    self.tab="first";
    self.open51=function(status)
    {
        if(status=="A")
            self.tab="first";
        else if(status=="B")
            self.tab="second";
    };



}])
.controller('test5', [function(){
    var self=this;

    self.list=
    [
    {id:1,label:'Item 0'},
    {id:2,label:'Item 1'}
    ];
    self.test511="516661";
    self.add=function()
    {
        self.list.push(
        {
            id:self.list.length+1,
            label:'Item '+self.list.length
        });

        console.log('test:',self.list);
        console.log(self.list[3]["label"]);
    };

}])
.controller('test52', ['$log',function($log){
    var self=this;

        self.test52=function(){
        $log.log('Button click');
    }

}])
.controller('test53', ['testFac',function(testFac){
    var self=this;
    self.list=function()
    {
        return testFac.list();
    };

    self.click53=function()
    {
        testFac.add({id:self.list().length+1,label:self.txt53});
        self.txt53="";


    }

    self.tab="first";
    self.open53=function(status)
    {
        if(status=="A")
            self.tab="first";
        else if(status=="B")
            self.tab="second";
    };


}])
.controller('test6', ['$http',function($http){
    var self=this;
    self.nodes=[];
    $http.get('/api/nodes').then(function(response){
        self.items=response.data;
    },function(errResponse){
        console.log(errResponse);
    });


}])

.factory('testFac', [function(){
    var items=
    [
        {id:1,label:"aaa"},
        {id:2,label:"bbb"}
    ];
    return {
        list:function(){
            return items;
        },
        add:function(item){
            items.push(item);
        }

    };
}])
;
