import addAnalytics from './analytics';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    // options, // the options for the root Vue instance
    router, // the router instance for the app
    // siteData // site metadata
}) => {
    addAnalytics(router, 'UA-112064718-10');

    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && typeof fetch !== 'undefined') {
        // if (typeof window !== 'undefined' && typeof fetch !== 'undefined') {
        fetch('https://us-central1-diy-mechatronics.cloudfunctions.net/downloadCount/weivbew', {
            method: 'post',
            body: { hello: 'world' }
        })
            .then((res) => {
                // console.log(`Request sent: ${res.status}`);
            })
            .catch(console.error)
    }
}