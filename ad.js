class AdModule {
    static getAdContent() {
        return `
            <div class="bg-white rounded-lg p-6 shadow-lg">
                <!-- AdSense Ad Unit -->
                <div class="mb-6">
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                         data-ad-slot="YOUR_AD_SLOT_ID"
                         data-ad-format="auto"
                         data-full-width-responsive="true"></ins>
                </div>

                <!-- Second AdSense Ad Unit -->
                <div class="my-6">
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                         data-ad-slot="YOUR_SECOND_AD_SLOT_ID"
                         data-ad-format="auto"
                         data-full-width-responsive="true"></ins>
                </div>

                <!-- Share Section -->
                <div class="border-t pt-4">
                    <h4 class="font-medium mb-2">Share with Friends</h4>
                    <div class="flex space-x-2">
                        <button class="flex-1 bg-[#1DA1F2] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors">
                            Twitter
                        </button>
                        <button class="flex-1 bg-[#4267B2] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors">
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    static initializeAds() {
        // Initialize Google AdSense
        (adsbygoogle = window.adsbygoogle || []).push({});
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
}

export default AdModule; 