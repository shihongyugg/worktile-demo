import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

const store = new Vuex.Store({
<<<<<<< HEAD
    state: {
        things: [],
        user:[]
    },
    mutations: {
        GETALL(state, payload) {
            // console.log(payload);
            state.things = payload;
        },
        ADD(state, payload) {
            console.log(payload, 'payload');
=======
    state:{
        things:[],
        xiaoxi:[]
    },
    mutations:{
            GETALL(state, payload) {
                // console.log(payload);
                state.things = payload;
            },
       
           ADD(state, payload) {
            console.log(payload,'payload');
>>>>>>> c988263a6745794cd7606516e36f5eca2db490df
            state.things.push(payload);
        },
        DEL(state, payload) {
            state.things = state.things.filter(item => {
                return item.id != payload.id;
            })
        },




        GETALL1(state, payload) {
            // console.log(payload);
            state.user = payload;
        },
        ADD1(state, payload) {
            console.log(payload, 'payload');
            state.user.push(payload);
        },
        DEL1(state, payload) {
            state.user = state.user.filter(item => {
                return item.id != payload.id;
            })
<<<<<<< HEAD
        },
=======
          },



          ryGETALL(state, payload) {
            // console.log(payload);
            state.xiaoxi = payload;
            },
            add(state, payload) {
                console.log(payload,'payload');
                state.xiaoxi.push(payload);
            },
            ryDEL(state, payload) {
            state.xiaoxi = state.xiaoxi.filter(item => {
              return item.id != payload.id;
            })
          },
>>>>>>> c988263a6745794cd7606516e36f5eca2db490df
    },
    actions: {
        async GETALL(context, payload) {
            //q请求数据
            var data = await fetch('/things/').then(res => res.json());
            // console.log(data, '132222222');
            context.commit('GETALL', data);
        },
<<<<<<< HEAD
        async ADD({ commit }, payload) {
            console.log(payload, 'payload');
=======


        async ryGETALL(context, payload) {
            //q请求数据
            var data = await fetch('/xiaoxi/').then(res => res.json());
            // console.log(data, '132222222');
            context.commit('ryGETALL', data);
        },
        
        async ADD({commit}, payload) {
            console.log(payload,'payload');
>>>>>>> c988263a6745794cd7606516e36f5eca2db490df
            // 上传数据
            var data = await fetch('/things/', {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(payload)
            }).then(res => res.json());
            console.log(data, 'data');
            commit('ADD', data);
        },
<<<<<<< HEAD
        async DEL({ commit }, payload) {
=======


        async add({commit}, payload) {
            console.log(payload,'payload');
            // 上传数据
            var data = await fetch('/xiaoxi/', {
              "method": "POST",
              "headers": {
                "Content-Type": "application/json"
              },
              "body": JSON.stringify(payload)
            }).then(res => res.json());
            console.log(data,'data');
            commit('add', data);
        },

        async DEL({commit}, payload) {
>>>>>>> c988263a6745794cd7606516e36f5eca2db490df
            //发送 delete请求 发送到json-server服务器,自动删除这条数据
            console.log(payload);
            var data = await fetch('/things/' + payload.id, {
                "method": "DELETE"
            }).then(res => res.json());

            commit("DEL", payload)
<<<<<<< HEAD
        },



        async GETALL1(context, payload) {
            //q请求数据
            var data = await fetch('/user/').then(res => res.json());
            // console.log(data, '132222222');
            context.commit('GETALL1', data);
        },
        async ADD1({ commit }, payload) {
            console.log(payload, 'payload');
            // 上传数据
            var data = await fetch('/user/', {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(payload)
            }).then(res => res.json());
            console.log(data, 'data');
            commit('ADD1', data);
        },
        async DEL1({ commit }, payload) {
            //发送 delete请求 发送到json-server服务器,自动删除这条数据
            console.log(payload);
            var data = await fetch('/user/' + payload.id, {
                "method": "DELETE"
            }).then(res => res.json());

            commit("DEL1", payload)
        },

=======
          },

          async ryDEL({commit}, payload) {
            //发送 delete请求 发送到json-server服务器,自动删除这条数据
            console.log(payload);
            var data = await fetch('/xiaoxi/' + payload.id, {
              "method": "DELETE"
            }).then(res => res.json());
      
            commit("ryDEL", payload)
          },
>>>>>>> c988263a6745794cd7606516e36f5eca2db490df
    },
    getters: {
        quanbu(state) {
            return state.user;
        },
        b4(state) {
            return state.things.filter(item => item.sta == 'b4');
        },
        b1(state) {
            return state.things.filter(item => item.sta == 'b1');
        },
        b2(state) {
            return state.things.filter(item => item.sta == 'b2');
        },
        b3(state) {
            return state.things.filter(item => item.sta == 'b3');
        }
    }
})
export default store