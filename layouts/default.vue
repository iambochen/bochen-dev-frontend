<template>
    <AppHeader />

    <section class="flex gap-x-4 px-48">
        <aside class="w-1/4 max-w-xs flex flex-col">
            <section class="flex-1">
                <div class="w-200 my-2 p-4 font-bold flex items-center justify-between rounded-md">
                    <span>
                        <Icon name="mdi:map-marker" class="w-6 h-6 mr-2" />Locate
                    </span>
                    <span title="Taiwan">🇹🇼</span>
                </div>
            </section>

            <section>
                <NuxtLink
                    class="w-200 my-2 p-4 font-bold flex items-center justify-between rounded-md hover:bg-slate-200 dark:hover:bg-slate-500"
                    href="https://github.com/bochen-dev" target="_blank" rel="noopener">
                    <span>
                        <Icon name="mdi:github" class="w-6 h-6 mr-2" />GitHub
                    </span>
                    <Icon name="mdi:open-in-new" class="w-4 h-4" />
                </NuxtLink>

                <NuxtLink
                    class="w-200 my-2 p-4 font-bold flex items-center justify-between rounded-md hover:bg-slate-200 dark:hover:bg-slate-500"
                    href="https://linkedin.com/in/bochen-chen" target="_blank" rel="noopener">
                    <span>
                        <Icon name="mdi:linkedin" class="w-6 h-6 mr-2" />LinkedIn
                    </span>
                    <Icon name="mdi:open-in-new" class="w-4 h-4" />
                </NuxtLink>

                <NuxtLink
                    class="w-200 my-2 p-4 font-bold flex items-center justify-between rounded-md hover:bg-slate-200 dark:hover:bg-slate-500"
                    href="mailto:chen@bochen.dev" target="_blank" rel="noopener">
                    <span>
                        <Icon name="mdi:envelope" class="w-6 h-6 mr-2" />Contact me
                    </span>
                    <Icon name="mdi:open-in-new" class="w-4 h-4" />
                </NuxtLink>
            </section>
        </aside>

        <section class="flex-1 px-8 py-4">
            <slot />
        </section>
    </section>

    <AppFooter />
</template>
