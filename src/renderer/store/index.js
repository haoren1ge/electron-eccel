import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        mindate:"",
        maxdate:"",
        keylist:[],
        datalist:[],
        sumlist:[],
        data:[],
        exdata:[]
    },
    mutations:{
        getdata(state,data){//这里的state对应着上面这个state
            state.data = data
            //你还可以在这里执行其他的操作改变state
        },
        getdatalist(state,data){//这里的state对应着上面这个state
            state.datalist = data
            //你还可以在这里执行其他的操作改变state
        }
        ,
        getsumlist(state,data){//这里的state对应着上面这个state
            state.sumlist = data
            //你还可以在这里执行其他的操作改变state
        },
        getkeylist(state,data){//这里的state对应着上面这个state
            state.keylist = data
            //你还可以在这里执行其他的操作改变state
        }
        ,
        getmin(state,m){//这里的state对应着上面这个state
            state.mindate = m
        }
        ,
        getmax(state,m){//这里的state对应着上面这个state
            state.maxdate = m
        }
        ,
        getex(state,m){//这里的state对应着上面这个state
            state.exdata = m
        }
    },
    actions:{
        switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法
            context.commit('switch_dialog');
            
        },
    }
})