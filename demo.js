new Vue ({
    el:'#app',
    data:{
        noidung:'Hello',
        mess:'Gõ vào đây',
        conditonal:2,
        image:'./images/image1.jpg',
        message:'Our king is dead',
        hoten:'Van Teo',
        ngaysinh:'24/03/2000',
        phai:'Nam',
        diem:8.5,
        stories:[
            {
                plot:'I crashed my car to day 1',
                write:"Alex"
            },
            {
                plot:'I crashed my car to day 2',
                write:"Alex"
            },
            {
                plot:'I crashed my car to day 3',
                write:"Alex"
            },
            {
                plot:'I crashed my car to day 4',
                write:"Alex"
            }

        ]
    },
    methods: {
        handclick:function(n){
            this.counter+=1;
        }
    },

})