<template>
    <div v-for="a in artist">
        <div class="card-wrapper">
            <div class="card artist-card">
                <button @click="exitCardInfo()" class="btn-return">
                    <i class="far fa-arrow-alt-circle-left"></i>
                </button>
                <img class="card-img-top" :src="a.imagePath" alt="Artist">
                <div class="card-body">
                    <h1 class="info-title">{{ a.name }}</h1>
                    <p class="text-box" style="text-align: center;">{{ a.info }}</p>
                    <div class="social-box">
                        <ul style="padding: 0px; margin-left: 15px;">
                            <li>
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-twitch"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['artist', 'exitCardInfo'],

    data() {
        return {

        }
    }
}
</script>

<style scoped>

/* Card Information/Edit */
.btn-return {
    position: absolute;
    left: 0;
    top: 0;
    width: 85px;
    height: 85px;
    background: #006A0B;
    padding: 7px 0px;
    border: 4px solid white;  
    transition: 0.3s linear;
}

.far {
    font-size: 60px;
    color: white;
}

.far:hover {
    font-size: 54px;
}

.artist-card {
    width: 45rem;
    margin-top: 15px;
    margin-bottom: 15px;
}

.card-wrapper {
    display: flex;
    justify-content: center;
}

li {
    list-style: none;
}

ul li .fab {
    letter-spacing: 10px;
    font-size: 35px;
    line-height: 60px;
    transition: 0.4s;
    color: #197861;
    text-decoration: none;
}

.social-box {
    display: flex;
    justify-content: center;
}

ul li .fab:hover {
    color: #66B8B3;
    text-decoration: none;
}

.text-box {
    margin: 12px 55px 12px;
    font-size: 1.1rem;
}

.info-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
}

.info-card {
    margin: 20px 10px;
    background: white;
}
</style>