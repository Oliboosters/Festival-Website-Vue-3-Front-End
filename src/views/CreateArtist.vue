<template>
    <div class="page-content">
        <div class="text-box">
            <div class="my-headline">Create Artist</div>
            <p class="text-box">
                Here you can create a new artist entry for this years line-up.       
            </p>
        </div>

        <div v-show="succesfull" class="success alert alert-success" role="alert">Artist was created successfully</div>

        <div class="input-box">
            <form @submit.prevent="createArtist()">
                <input required type="text" autocomplete="off" class="input-field" name="name" placeholder="Name" v-model="posts.name">
                <br>
                <br>
                <input required type="text" autocomplete="off" class="input-field" name="info" placeholder="Information" v-model="posts.info">
                <br>
                <br>
                <input disabled type="text" autocomplete="off" class="input-field" name="info" placeholder="ImagePath" v-model="posts.imagePath">
                <br>
                <br>
                <div class="btn-and-link">
                    <button type="submit" class="btn-create">Create</button>
                    <RouterLink class="return-link" to="/">Back to Line-Up</RouterLink>       
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: {
                name: null,
                info: null,
                imagePath: null
            },
            succesfull: false,
        }
    },

    methods: {
        createArtist(){    
            /* Until a proper image-uploading function is implemented, the image will be defaulted
               to Mr. Monkey (html input field is also disabled until another option is found) */

            if(this.posts.imagePath == null){
                this.posts.imagePath = 'https://localhost:5001/Images/MrMonkey.jpg';
            }
            
            let url = 'https://localhost:5001/api/Artist';
            axios.post(url, this.posts).then((response) => {
                console.log('Artist has been added to API');
                this.succesfull = true;
            })
        }
    }
}
</script>

<style scoped>
.page-content {
    display: flex;
    flex-direction: column;
    padding: 72px;
    min-height: 100vh;
    background-color: #3a4153;
    background-image: url("../assets/BackgroundArtist.jpg");
    background-size: cover;
    background-blend-mode: multiply;
}

.text-box p {
    /*outline: 2px solid black;*/
    font-size: 1.45rem;
    color: white;
    font-weight: lighter;
}

.input-box {
    /*outline: 2px solid black;*/
    align-self: flex-start;
}

.input-field {
    border: 2px solid white;
    font-size: 1.2rem;
    padding: 15px;
    border-radius: 7px;
    width: 600px;
    outline: none;
}

.success {
    width: 600px;
}

.btn-and-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
}

.return-link {
    font-size: 1.1rem;
    font-weight: lighter;
    text-decoration: none;
    margin-left: 10px;
    color: white;
    font-weight: lighter;
}

.return-link:hover {
    text-decoration: underline;
    cursor: pointer;
    font-weight: 400;
}

.btn-create {
    outline: none;
    display: block;
    border: 0;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.5px;
    padding: 17px;
    width: 10rem;
    border-radius: 6px;
    background: #0088E6;
    color: white;
    cursor: pointer;
    transition: 0.2s linear;
}

.btn-create:hover {
    background: #00538A;
}

.my-headline {
    color: white;
    font-size: 4.5rem;
}

@media (width < 45em){
    .input-field {
        width: 100%;
    }

    .success {
        width: 100%;
    }

    .my-headline {
        text-align: center;
        font-size: 4rem;
    }

    .return-link {
        font-size: 0.9rem;
        margin-left: 0px;
        margin-top: 5px;
    }

    .btn-and-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .input-box {
        align-self: normal;
    }
}
</style>