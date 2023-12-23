<template>
    <div class="w-screen h-full flex justify-center ">
        <div class="mt-48 w-64 font-kt">
            <div class="w-64 ">
                <!-- <label for="price" class="block text-sm font-medium leading-6 text-gray-900">用户名</label> -->
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <UserIcon class="w-6 h-6 text-qprimary" />
                    </div>
                    <input type="text" name="price" id="price"
                        class="block w-full  rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="请输入用户名">
                </div>
            </div>
            <div class="w-64 mt-4">
                <!-- <label for="price" class="block text-sm font-medium leading-6 text-gray-900">密码</label> -->
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon class="w-6 h-6 text-qprimary" />
                    </div>
                    <input type="password" name="price" id="price"
                        class="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="请输入密码">
                </div>
            </div>
            <button type="submit" class="flex w-full justify-center rounded-md tracking-widest bg-qprimary mt-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">登陆</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { UserIcon,LockClosedIcon } from '@heroicons/vue/24/solid'
</script>