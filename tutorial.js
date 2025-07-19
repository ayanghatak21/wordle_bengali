// Tutorial functionality for Bengali Wordle
class Tutorial {
    constructor() {
        this.helpButton = document.getElementById('help-button');
        this.helpModal = document.getElementById('help-modal');
        this.closeHelp = document.getElementById('close-help');
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.helpButton.addEventListener('click', () => this.showModal());
        this.closeHelp.addEventListener('click', () => this.hideModal());
        this.helpModal.addEventListener('click', (e) => {
            if (e.target === this.helpModal) {
                this.hideModal();
            }
        });
    }

    showModal() {
        this.helpModal.classList.remove('hidden');
        this.helpModal.classList.add('flex');
    }

    hideModal() {
        this.helpModal.classList.add('hidden');
        this.helpModal.classList.remove('flex');
    }

    // Static method to create the tutorial HTML
    static createTutorialHTML() {
        return `
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-4xl font-bold">বাংলা WORDLE</h1>
                <button id="help-button" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <span class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                        </svg>
                        Help
                    </span>
                </button>
            </div>

            <div id="help-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
                <div class="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold">How to Use the Bengali Keyboard</h2>
                        <button id="close-help" class="text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div class="space-y-6">
                        <section>
                            <h3 class="text-xl font-semibold mb-3">Basic Instructions</h3>
                            <ul class="list-disc pl-5 space-y-2">
                                <li>Click on the virtual keyboard keys to type Bengali characters</li>
                                <li>Use the <span class="font-mono bg-gray-100 px-2 py-1 rounded">Enter</span> key to submit your guess</li>
                                <li>Use the <span class="font-mono bg-gray-100 px-2 py-1 rounded">Backspace</span> key to delete characters</li>
                            </ul>
                        </section>

                        <section>
                            <h3 class="text-xl font-semibold mb-3">Bengali Keyboard Layout</h3>
                            <div class="space-y-4">
                                <div>
                                    <h4 class="font-medium mb-2">Consonants (ব্যঞ্জনবর্ণ)</h4>
                                    <p class="text-gray-600">The first three rows contain consonants. They are arranged in a logical order based on their pronunciation.</p>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-2">Vowels (স্বরবর্ণ)</h4>
                                    <p class="text-gray-600">The fourth row contains the independent vowels.</p>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-2">Vowel Signs (কার)</h4>
                                    <p class="text-gray-600">The fifth row contains vowel signs that combine with consonants to form syllables.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 class="text-xl font-semibold mb-3">Tips for Typing</h3>
                            <ul class="list-disc pl-5 space-y-2">
                                <li>Type consonants first, then add vowel signs</li>
                                <li>For conjuncts (যুক্তাক্ষর), type the first consonant, then the second</li>
                                <li>The <span class="font-mono bg-gray-100 px-2 py-1 rounded">্</span> key (hasant) is used to create conjuncts</li>
                                <li>Practice with simple words first to get comfortable with the layout</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        `;
    }

    static getTutorialContent() {
        return `
            <div class="space-y-6">
                <section>
                    <h3 class="text-xl font-semibold mb-3">Basic Instructions</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Click on the virtual keyboard keys to type Bengali characters</li>
                        <li>Use the <span class="font-mono bg-gray-100 px-2 py-1 rounded">Enter</span> key to submit your guess</li>
                        <li>Use the <span class="font-mono bg-gray-100 px-2 py-1 rounded">Backspace</span> key to delete characters</li>
                    </ul>
                </section>

                <section>
                    <h3 class="text-xl font-semibold mb-3">Bengali Keyboard Layout</h3>
                    <div class="space-y-4">
                        <div>
                            <h4 class="font-medium mb-2">Consonants (ব্যঞ্জনবর্ণ)</h4>
                            <p class="text-gray-600">The first three rows contain consonants. They are arranged in a logical order based on their pronunciation.</p>
                        </div>
                        <div>
                            <h4 class="font-medium mb-2">Vowels (স্বরবর্ণ)</h4>
                            <p class="text-gray-600">The fourth row contains the independent vowels.</p>
                        </div>
                        <div>
                            <h4 class="font-medium mb-2">Vowel Signs (কার)</h4>
                            <p class="text-gray-600">The fifth row contains vowel signs that combine with consonants to form syllables.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 class="text-xl font-semibold mb-3">Example Words</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-medium mb-2">ব্যাকরণ</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ব</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">্য</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">া</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ক</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">র</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ণ</span>
                            </div>
                            <p class="text-gray-600 mt-2">Type: ব + ্য + া + ক + র + ণ</p>
                            <p class="text-gray-600 mt-1 text-sm">Note: ্য (jofola) is used to create the 'bya' sound</p>
                        </div>

                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-medium mb-2">নেড়া</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ন</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ে</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ড়</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">া</span>
                            </div>
                            <p class="text-gray-600 mt-2">Type: ন + ে + ড + ় + া</p>
                        </div>

                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-medium mb-2">পেঁকো</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">প</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ে</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ঁ</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ক</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ো</span>
                            </div>
                            <p class="text-gray-600 mt-2">Type: প + ে + ঁ + ক + ো</p>
                        </div>

                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-medium mb-2">শর্মদ</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">শ</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">র</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">্</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ম</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">দ</span>
                            </div>
                            <p class="text-gray-600 mt-2">Type: শ + র + ্ + ম + দ</p>
                        </div>

                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-medium mb-2">অকৃতি</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">অ</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ক</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">ৃ</span>
                                <span class="font-mono bg-gray-100 px-2 py-1 rounded">তি</span>
                            </div>
                            <p class="text-gray-600 mt-2">Type: অ + ক + ৃ + ত + ি</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 class="text-xl font-semibold mb-3">Tips for Typing</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Type consonants first, then add vowel signs</li>
                        <li>For conjuncts (যুক্তাক্ষর), type the first consonant, then the second</li>
                        <li>The <span class="font-mono bg-gray-100 px-2 py-1 rounded">্</span> key (hasant) is used to create conjuncts</li>
                        <li>Practice with simple words first to get comfortable with the layout</li>
                    </ul>
                </section>
            </div>
        `;
    }
}

// Export the Tutorial class
export default Tutorial; 