<template>
    <div class="container">
        <CardInfo 
            v-if="show_artist"
            :artist="artist"
            :exit-card-info="() => show_artist = false">
        </CardInfo>
        <div v-else>
            <h1 class="graphic-text-DX">Line-Up</h1>
            <div class="all-artists">
                <div v-if="artists.length > 0" v-for="art in artists">
                    <Card 
                        :artist="art"
                        @fetch-artists="fetchAllArtists"
                        @show-card-info="showArtist($event)">
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import CardInfo from '../components/CardInfo.vue';

export default {
    components: {
        Card,
        CardInfo
    },

    data() {
        return {
            apiURL: 'https://localhost:5001/api/Artist',          
            artists: [],
            artist: {},
            show_artist: false
        }
    },

    mounted() {
        this.fetchAllArtists();
    },

    methods: {
        fetchAllArtists: function(){
            axios.get(this.apiURL).then(response => {
                this.artists = response.data;
                console.log('All artists have been fetched');
            });
        },

        showArtist: function(id){
            let allArtists = this.artists;
            let clickedArtist = allArtists.filter(a => a.id == id);
            this.artist = clickedArtist;
            this.show_artist = true;
            console.log('Showing specific artist');    
        }
    }
}
</script>

<style scoped>

/* Graphic Font Design */
.graphic-text-DX {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 18rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: 0;
    background: url(../assets/TextGraphic.jpg) 50% 90%;
    background-size: cover;
    -webkit-text-fill-color: transparent;
    background-clip:border-box;
    -webkit-background-clip: text;
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 11px;
}

.all-artists {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

@media(width < 87em) {
    .graphic-text-DX {
        font-size: 9.5rem;
        margin: 20px 0px 20px 0px;
        -webkit-text-stroke-width: 4px;
    } 
}

@media(width < 48em) {
    .graphic-text-DX {
        font-size: 6.5rem;
        margin: 20px 0px 20px 0px;
        -webkit-text-stroke-width: 3px;
    }
}
</style>