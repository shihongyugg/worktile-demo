import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        things:[]
    },
    mutations:{
        GETALL(state, payload) {
            // console.log(payload);
            state.things = payload;
        },
        ADD(state, payload) {
            console.log(payload,'payload');
            state.things.push(payload);
          },
          DEL(state, payload) {
            state.things = state.things.filter(item => {
              return item.id != payload.id;
            })
          },
    },
    actions:{
        async GETALL(context, payload) {
            //q请求数据
            var data = await fetch('/things/').then(res => res.json());
            // console.log(data, '132222222');
            context.commit('GETALL', data);
        },
        async ADD({commit}, payload) {
            console.log(payload,'payload');
            // 上传数据
            var data = await fetch('/things/', {
              "method": "POST",
              "headers": {
                "Content-Type": "application/json"
              },
              "body": JSON.stringify(payload)
            }).then(res => res.json());
            console.log(data,'data');
            commit('ADD', data);
        },
        async DEL({commit}, payload) {
            //发送 delete请求 发送到json-server服务器,自动删除这条数据
            console.log(payload);
            var data = await fetch('/things/' + payload.id, {
              "method": "DELETE"
            }).then(res => res.json());
      
            commit("DEL", payload)
          },
         
    },
    getters:{
        quanbu(state){
            return state.things;
        },
        b4(state){
            return state.things.filter(item => item.sta == 'b4');
        },
        b1(state){
            return state.things.filter(item => item.sta == 'b1');
        },
        b2(state){
            return state.things.filter(item => item.sta == 'b2');
        },
        b3(state){
            return state.things.filter(item => item.sta == 'b3');
        }
    }
})
export default store