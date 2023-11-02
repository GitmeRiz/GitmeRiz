<template>
    <div class="min-h-screen flex justify-center items-center bg-gray-900">
        <div
            class="bg-gray-800 text-white p-4 md:p-8 rounded-md text-center transform transition-transform hover:scale-105 container-animation">
            <h1 class="text-2xl md:text-4xl mb-4 animate-fade-in-down">Sidang TA 1</h1>
            <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div v-for="unit in displayedUnits" :key="unit.label" class="animate-pulse">
                    <p
                        :class="displayMode === 'minutes' || displayMode === 'seconds' ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl'">
                        {{ unit.value }}</p>
                    <p class="text-lg md:text-xl">{{ unit.label }}</p>
                </div>
            </div>
<div class="mt-2 md:mt-4 flex justify-center items-center">
                <label class="block text-white font-bold mb-2 md:hidden" for="displayMode">Choose Mode:</label>
                <select @change="setDisplayMode($event.target.value)" v-model="displayMode" class="block appearance-none w-full md:w-auto bg-white text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 select-hover">                    <option value="detailed">Show Detail Time</option>
                    <option value="hours">Show Total Hours</option>
                    <option value="minutes">Show Total Minutes</option>
                    <option value="seconds">Show Total Seconds</option>
                </select>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            targetTime: this.calculateTargetTime(),
            timeUnits: [
                { label: 'Days', value: 0 },
                { label: 'Hours', value: 0 },
                { label: 'Minutes', value: 0 },
                { label: 'Seconds', value: 0 }
            ],
            displayMode: 'detailed',
            intervalId: null
        };
    },
    computed: {
        displayedUnits() {
            const totalHours = this.timeUnits[0].value * 24 + this.timeUnits[1].value;
            const totalMinutes = totalHours * 60 + this.timeUnits[2].value;
            const totalSeconds = totalMinutes * 60 + this.timeUnits[3].value;

            switch (this.displayMode) {
                case 'hours':
                    return [
                        { label: 'Hours', value: String(Math.floor(totalHours)).padStart(2, '0').toLocaleString() },
                        { label: '', value: ':' },
                        { label: 'Minutes', value: String(this.timeUnits[2].value).padStart(2, '0') },
                        { label: '', value: ':' },
                        { label: 'Seconds', value: String(this.timeUnits[3].value).padStart(2, '0') }
                    ];
                case 'minutes':
                    return [
                        { label: 'Minutes', value: totalMinutes.toLocaleString() },
                        { label: '', value: ':' },
                        { label: 'Seconds', value: String(this.timeUnits[3].value).padStart(2, '0') }
                    ];
                case 'seconds':
                    return [
                        { label: 'Seconds', value: totalSeconds.toLocaleString() }
                    ];
                default:
                    return this.timeUnits.map(unit => ({
                        label: unit.label,
                        value: unit.value.toLocaleString()
                    }));
            }
        }
    },

    mounted() {
        this.updateTime();
        this.intervalId = setInterval(this.updateTime, 1000);
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        calculateTargetTime() {
            const target = new Date();
            target.setDate(target.getDate() + 37);
            target.setHours(0, 0, 0, 0);
            return target.getTime();
        },
        updateTime() {
            const now = new Date().getTime();
            const distance = this.targetTime - now;

            if (distance <= 0) {
                clearInterval(this.intervalId);
                this.timeUnits.forEach(unit => unit.value = 0);
                return;
            }

            this.timeUnits[0].value = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.timeUnits[1].value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.timeUnits[2].value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.timeUnits[3].value = Math.floor((distance % (1000 * 60)) / 1000);
        },
        setDisplayMode(mode) {
            this.displayMode = mode;
        }
    }
};
</script>
  
<style scoped>
@keyframes slideInFromTop {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}

.container-animation {
    animation: slideInFromTop 0.7s ease-out forwards;
}

.animate-pulse>p.text-6xl,
.animate-pulse>p.text-7xl {
    animation: pulse 1.5s infinite;
}

/* Existing fadeInDown animation can be removed or kept for other elements if needed */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-1rem);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.select-hover:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
}

select {
    background-color: #2c3e50;
    border: none;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

select:focus {
    outline: none;
    background-color: #2c3e50;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
}
</style>