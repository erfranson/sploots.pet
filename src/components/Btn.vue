.<template>
    <button class="btn" :class="typeLogic" >{{ name }}</button>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: {
        name: String,
        type: String
    },
    setup(props){
        const typeLogic = computed(() => {
            return props.type ? ('btn--' + props.type) : ''
        })

        return { typeLogic }
    }
}
</script>

<style lang='scss'>
    @import '../sass/components/_btn.scss';
</style>