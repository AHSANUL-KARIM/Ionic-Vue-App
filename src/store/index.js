import {createStore} from 'vuex';

const store = createStore({

    state() {

        return {
            memories: [
                {
                    id: "m1",
                    title: "A trip into the mountains",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/One_of_the_scenic_locations_of_the_Oukaimeden_village.JPG/1280px-One_of_the_scenic_locations_of_the_Oukaimeden_village.JPG",
                    description: "It was a really nice trip!",
                },
                {
                    id: "m2",
                    title: "Surfing the sea side",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/20190502_Newhaven_to_Dieppe_Ferry_4.jpg/1280px-20190502_Newhaven_to_Dieppe_Ferry_4.jpg",
                    description: "Feeling the cool breeze",
                },
                {   id: "m3",
                    title: "Good eating",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Pomme_de_France.jpg/1280px-Pomme_de_France.jpg",
                    description: "Really tasty!"
                }
            ]
        }
    },

    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description
            };

            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state) {
            return state.memories; 
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find((memory) => memory.id === memoryId);
            }
        }
    }

});

export default store;