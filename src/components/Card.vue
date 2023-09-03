<template>
    <div class="card text-center">
        <img class="card-img-top img-card" :src="artist.imagePath" alt="Artist Picture">
        <div class="card-body">
            <div v-if="editID == artist.id">
                <form @submit.prevent="editArtist(editID, artist.imagePath)">
                    <input class="my-input" type="text" placeholder="Name" autocomplete="off" v-model="changedArtist.name">
                    <br>
                    <br>
                    <textarea class="textarea-input" placeholder="Information..." cols="19" rows="4" v-model="changedArtist.info"></textarea>
                    <br>
                    <br>
                    <div class="actions">
                        <div class="wrap-buttons">
                            <div class="item">
                                <button type="submit" class="edit-btn-update">Update</button>
                            </div>
                            <div class="item">
                                <button @click="stopEdit()" class="edit-btn-back">Back</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div v-else>
                <h5 class="card-title">{{ artist.name }}</h5>
                <p class="card-text">{{ artist.info }}</p>
                <div class="actions">
                    <a href="#" @click="$emit('show-card-info', artist.id)">Information</a>
                    <div class="wrap-buttons">
                        <div class="item">
                            <button @click="beginEdit(artist.id)" class="a-btn-blue">Edit</button>
                        </div>
                        <div class="item">
                            <button @click="deleteArtist(artist.id)" class="a-btn-red">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['artist'],

    data() {
        return {
            editID: '',
            changedArtist: {
                id: null,
                name: null,
                info: null,
                imagePath: null
            },
        }
    },

    methods: {
        beginEdit(id){
            this.editID = id;
        },
        
        stopEdit(){
            this.editID = '';
        },

        async editArtist(id, img){
            this.changedArtist.id = id;
            this.changedArtist.imagePath = img;

            let url = 'https://localhost:5001/api/Artist';
            axios.put(url + `/${id}`, this.changedArtist).then((response) => {
                console.log('Artist has been updated');
                this.$emit("fetch-artists");
            });
            this.stopEdit();
        },

        deleteArtist(id){
            let url = 'https://localhost:5001/api/Artist';
            axios.delete(url + `/${id}`).then((response) => {
                console.log(`Artist has been deleted`);
                this.$emit("fetch-artists");
            });
        }
    }
}
</script>

<style scoped>
/* Card Styles */

.card-body {
    box-shadow: 0 0 20px 7px rgba(0,0,0,0.1);
}

.card {
    position: relative;
    width: 19rem;
    height: 29rem;
    margin: 5px;
}

h5 {
    font-size: 25px;
    font-weight: 700;
}

.img-card {
    width: 100%;
    height: 210px;
}

.card-text {
    --max-lines: 3;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--max-lines);
}

.actions {
    /*outline: 5px solid black;*/
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 12px;  
}

.card-body a {
    color: #197861;
    text-decoration: none;
    font-size: 15px;
    margin-top: auto;
    font-weight: 600;
}

.card-body a:hover {
    color: #66B8B3;
    text-decoration: none;
}

.wrap-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
}

.item {
    padding: 13px 10px 4px;
}

.a-btn-blue {
    outline: none;
    display: block;
    border: 0;
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    padding: 15px;
    width: 85px;
    border-radius: 11px;
    background: #0088E6;
    color: white;
    cursor: pointer;
    transition: 0.2s linear;
}

.a-btn-blue:hover {
    background: #00538A;
}

.a-btn-red {
    outline: none;
    display: block;
    border: 0;
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    padding: 15px;
    width: 85px;
    border-radius: 11px;
    background: #FF2525;
    color: white;
    cursor: pointer;
    transition: 0.3s linear;
}

.a-btn-red:hover {
    background: #830000;
}

/* Edit Styles */

.my-input {
    border: none;
    border-bottom: 2px solid rgb(235, 235, 235);
    text-align: center;
    color: black;
    outline: none;
    transition: 0.1s linear;
}

.my-input:hover {
    cursor: pointer;
}

.my-input:focus {
    cursor: text;
    border-color: black;
}

.textarea-input {
    resize: none;
    outline: none;
    width: 180px;
    height: 100px;
    font-size: 15px;
    padding: 1em;
    border: 2px solid transparent;
    border-radius: 5px;
    background-color: rgb(235, 235, 235);
    transition: 0.1s linear;
}

.textarea-input:hover {
    cursor: pointer;
}

.textarea-input:focus {
    cursor: text;
    border-color: black;
    background-color: white;
}

.edit-btn-back {
    outline: none;
    display: block;
    border: 0;
    font-size: 17px;
    font-weight: 600;
    line-height: 1;
    padding: 15px;
    width: 90px;
    border-radius: 11px;
    background: #009F11;
    color: white;
    cursor: pointer;
    transition: 0.3s linear;
}

.edit-btn-back:hover {
    background: #00630A;
}

.edit-btn-update {
    outline: none;
    display: block;
    border: 0;
    font-size: 17px;
    font-weight: 600;
    line-height: 1;
    padding: 15px;
    width: 90px;
    border-radius: 11px;
    background: #0088E6;
    color: white;
    cursor: pointer;
    transition: 0.3s linear;
}

.edit-btn-update:hover {
    background: #00538A;
}

@media(width < 48em)
{
    .card {
        margin-bottom: 25px;
    }
}
</style>