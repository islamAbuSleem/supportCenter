export default function(resources) {
    return {
        data() {
            let initData = {
                remoteDataLoading: 0
            }
            initData.remoteError = {}
                // initializing Data
            for (let key in resources) {
                initData[key] = null;
                initData.remoteError[key] = null
            }

            return initData;
        },
        computed: {
            remoteDataBusy() {
                return this.$data.remoteDataLoading !== 0;
            },
            hasRemoteError() {
                // keys makes array of remoteError,, some ,, itrate over this array and check if 
                // remoteError[each element in array] exist and having a value ,, if there's at least one it will return true
                return Object.keys(this.$data.remoteError).some(key => this.$data.remoteError[key])
            }
        },
        created() {
            for (const key in resources) {
                let url = resources[key];
                this.fetchResource(key, url)
            }
        },
        methods: {
            async fetchResource(key, url) {
                this.$data.remoteDataLoading++;
                this.$data.remoteError[key] = null;
                try {
                    this.$data[key] = await this.$fetch(url)
                } catch (e) {
                    console.error(e)
                    this.$data.remoteError[key] = e
                }
                this.$data.remoteDataLoading--;
            }
        },
    }
}