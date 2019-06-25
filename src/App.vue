<template>
	<div id="app">

		<div class="flexbox">
			<div class="flexitem">
				<!-- <breath-circle :base-rate="inhaletime"> </breath-circle > -->
				<breath-circle  is-verbose=true
												:inhale-time="inhaletime"  
												:exhale-time="exhaletime" 
												:inhale-hold-time="inhalehold" 
												:exhale-hold-time="exhalehold"></breath-circle >
			</div>
		</div>

		<div class="header-box">
			<div class="slider-label">
				<div>
					{{ breathsPerMinute }} Breaths/Minute 
					@ {{ cycleTime }} Seconds/Cycle
				</div>
			</div>
		</div>

		<div class="slider-box">
			<div class="slider-label">
				Inhale {{ inhaletime/1000 }} seconds w/ {{ inhalehold/1000 }} sec. hold
			</div>
			<vue-slider v-model="inhaletime"
									:min="100"
									:max="10000"
									:interval="100"
									:lazy="true"
									></vue-slider>
			<vue-slider v-model="inhalehold"
									:min="100"
									:max="10000"
									:interval="100"
									:lazy="true"
									></vue-slider>
		</div>

		<div class="slider-box">
			<div class="slider-label">
				Exhale {{ exhaletime/1000 }} seconds w/ {{ exhalehold/1000 }} sec. hold
			</div>
			<vue-slider v-model="exhaletime"
									:min="100"
									:max="10000"
									:interval="100"
									:lazy="true"
									></vue-slider>
			<vue-slider v-model="exhalehold"
									:min="100"
									:max="10000"
									:interval="100"
									:lazy="true"
									></vue-slider>
		</div>

	</div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
 
export default {
  components: {
    VueSlider
  },
  data () {
    return {
      inhaletime: 4000,
			inhalehold: 3000,
			exhaletime: 4000,
			exhalehold: 6000
    }
  },
	computed: {
		cycleTime: function() {
			let cycleInSeconds = (this.inhaletime + this.inhalehold + 
				this.exhaletime + this.exhalehold)/1000
			return(cycleInSeconds.toFixed(1))
		},
		breathsPerMinute: function () {
			let bpm = 60/this.cycleTime
			return bpm.toFixed(1)
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.flexbox {
  display: flex;
  justify-content: space-around;
}
.flexitem{
	margin: 0.5rem 3rem 1rem 3rem;
}
.header-box{
		margin: 0rem 3rem;
}
.slider-box{
		margin: 1.5rem 3rem;
}
.slider-label {
	font-size: 0.7rem;
	text-align: left;
	padding-bottom: 0.3rem;
}
</style>

