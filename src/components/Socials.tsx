import React from 'react'
import VaraText from './VaraText'
import useOnScreen from './InView'

const Socials = () => {

    const ref = React.useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(ref)


    return (
        <div ref={ref} className='flex flex-col items-center p-4'>
            {
                isVisible && <VaraText text='Follow Me !' contName='follow-section' fontSize={36}/>
            }
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10  mt-10 text-white'>
                <a className='flex flex-col items-center font-bold text-white' href='https://twitter.com/higu_VT'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                    </svg>
                    <p>Twitter / X </p>
                </a>
                <a className='flex flex-col items-center font-bold text-white' href='https://discord.gg/SHw8CGYQZq'>
                    <svg className="w-8 h-8  -mt-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />

                    </svg>
                    <p>Discord</p>
                </a>
                <a className='flex flex-col items-center font-bold text-white' href='https://www.tiktok.com/@higu_vt'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' shape-rendering="geometricPrecision" fill='#FFFFFF' text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 449.45 515.38"><path fill-rule="nonzero" d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z" /></svg>
                    <p>TikTok</p>
                </a>

                <a className='flex flex-col items-center font-bold text-white' href='https://throne.com/higuvt'>
                    <svg className='w-10 h-10 -mt-4' fill="#FFFFFF" width="800px" height="800px" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 1000 1000">

                        <g>

                            <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">

                                <path d="M4895.5,4966.8c-53.3-57.4-55.3-243.9-2-299.3c30.7-34.8,34.8-84,34.8-352.6v-311.6l-209.1,10.2c-116.8,4.1-243.9,12.3-282.9,16.4c-61.5,6.1-73.8-2.1-90.2-49.2c-16.4-43-12.3-63.5,14.3-94.3c30.7-34.9,59.4-36.9,250.1-28.7l215.2,10.2v-92.2c0-77.9,10.2-100.4,77.9-166l77.9-75.8l75.8,77.9c63.5,65.6,75.8,92.2,75.8,166v90.2l235.7-10.2c211.1-8.2,239.8-4.1,270.6,28.7c26.6,30.7,30.8,51.2,14.3,94.3c-16.4,47.1-28.7,55.3-90.2,49.2c-38.9-4.1-170.1-12.3-291-16.4l-221.4-10.2v321.8c0,278.8,4.1,328,36.9,362.8c45.1,51.2,45.1,194.7-2,266.5C5041,5024.2,4952.9,5028.3,4895.5,4966.8z" />

                                <path d="M3104,4681.9c-73.8-73.8-43-237.8,59.4-328c45.1-38.9,79.9-116.8,151.7-332.1l92.2-280.8l-192.7-63.5c-108.6-36.9-213.2-61.5-235.7-55.4c-20.5,6.2-59.4-6.1-84-26.6c-38.9-30.7-43-45.1-26.6-94.3c22.5-65.6,112.7-92.2,161.9-51.2c38.9,32.8,317.7,125,328,108.6c4.1-8.2,18.4-47.2,30.7-88.1c18.4-55.3,45.1-82,116.8-116.8c51.2-24.6,100.4-41,108.6-36.9c8.2,6.2,32.8,53.3,51.2,104.5c28.7,73.8,32.8,106.6,14.4,157.8c-12.3,34.8-22.5,69.7-22.5,79.9c0,18.4,295.2,116.8,377.1,125c73.8,8.2,104.5,53.3,86.1,125c-18.4,73.8-100.4,94.3-161.9,41c-36.9-34.8-424.3-180.4-434.5-164c-2.1,2.1-47.1,133.2-98.4,291.1c-75.8,233.7-92.2,305.4-82,381.3C3366.4,4651.1,3214.7,4792.5,3104,4681.9z" />

                                <path d="M6701.3,4677.7c-61.5-53.3-92.2-164-69.7-248c12.3-49.2-65.6-332.1-174.2-623.1c-12.3-32.8-375.1,86.1-438.6,143.5c-63.5,59.4-155.8,28.7-164-53.3c-8.2-73.8,26.6-116.8,96.3-116.8c28.7,0,125-24.6,213.2-53.3c145.5-49.2,159.8-57.4,149.6-98.4c-36.9-123-34.8-153.7,6.2-235.7c24.6-45.1,47.2-84,53.3-84c26.7,0,194.7,92.2,194.7,106.6c0,10.2,12.3,49.2,28.7,88.1l30.7,69.7l147.6-49.2c82-28.7,159.9-61.5,170.1-71.7c24.6-24.6,94.3-26.7,127.1-4.1c12.3,8.2,28.7,34.8,36.9,59.4c18.5,59.4-49.2,131.2-108.7,114.8c-55.3-14.3-438.6,114.8-426.3,145.5c4.1,12.3,49.2,145.5,98.4,297.2c69.7,213.2,100.4,278.8,135.3,295.2c57.4,24.6,118.9,178.3,100.4,248C6879.6,4724.9,6789.4,4753.6,6701.3,4677.7z" />

                                <path d="M1460.1,3675.4c-47.1-26.6-47.1-127.1-4.1-202.9c38.9-63.5,129.1-123,186.5-123c20.5,0,135.3-98.4,258.3-221.4l219.3-219.3l-137.3-137.3c-77.9-75.8-164-147.6-196.8-157.8c-69.7-26.7-88.1-71.7-57.4-137.3c30.7-71.7,143.5-63.5,180.4,12.3c12.3,28.7,71.7,96.3,127.1,153.7l104.5,100.4l67.6-65.6c57.4-57.4,82-65.6,174.2-65.6h106.6v106.6c0,92.2-8.2,116.8-65.6,174.2l-65.6,67.6l120.9,123c67.6,67.6,131.2,123,145.5,123c34.8,0,90.2,69.7,90.2,114.8c0,57.4-38.9,90.2-106.6,90.2c-45.1,0-63.5-14.4-82-55.3c-12.3-32.8-88.1-125-168.1-207l-145.5-147.6l-229.6,229.6c-143.5,143.5-231.6,246-231.6,272.6C1751.2,3626.2,1564.6,3736.9,1460.1,3675.4z" />

                                <path d="M8263.2,3599.6c-77.9-51.2-114.8-106.6-116.9-168.1c0-38.9-59.5-110.7-225.5-276.7l-225.5-225.5l-135.3,133.2c-73.8,73.8-147.6,164-161.9,200.9c-22.5,51.2-41,65.6-86.1,65.6c-32.8,0-69.7-10.2-84-24.6c-51.2-51.2-22.6-106.6,135.3-254.2l157.8-147.6l-67.6-71.7c-61.5-63.5-67.7-79.9-61.5-170.1l6.1-100.4l100.4-6.1c90.2-6.2,106.6,0,170.1,61.5l71.7,67.6l159.9-168.1c176.3-186.5,246-215.2,289-120.9c26.7,59.4-6.1,135.3-59.4,135.3c-36.9,0-332.1,282.9-332.1,317.7c0,36.9,418.2,440.7,457.1,440.7c106.6,0,219.3,114.8,219.3,223.4C8474.3,3628.3,8373.9,3671.3,8263.2,3599.6z" />

                                <path d="M4838.1,3238.8v-256.2l-102.5-12.3c-178.3-22.5-440.7-90.2-600.6-153.7c-84-34.9-159.9-61.5-170.1-61.5s-55.4,116.8-102.5,262.4c-49.2,143.5-94.3,268.5-102.5,276.7c-6.1,8.2-30.7-20.5-51.2-65.6l-36.9-82l-80,41c-45.1,22.6-86.1,36.9-92.2,30.8c-6.1-6.2,34.8-147.6,92.2-317.7l102.5-307.5L3559,2490.7c-75.8-55.4-192.7-157.8-260.3-225.5l-123-125L2894.9,2421l-282.9,282.9v-108.6v-106.6h-96.3h-98.4L2856,2050l436.6-436.6l49.2-243.9c26.6-133.2,47.1-248,45.1-256.2c-4.1-8.2-227.5,159.9-496,375.1c-377.1,299.3-516.5,399.7-602.6,428.4c-120.9,41-188.6,49.2-188.6,20.5c0-8.2,34.8-69.7,75.8-131.2c61.5-94.3,190.6-207,684.6-598.5l608.8-481.7l22.5-106.6c12.3-57.4,20.5-106.6,16.4-110.7c-2.1-4.1-194.7,104.5-424.3,241.9c-278.8,164-459.1,256.2-532.9,274.7c-231.6,57.4-256.2,28.7-112.7-129.1c69.7-79.9,205-170.1,608.8-405.8c284.9-166,522.7-305.4,526.8-309.5c8.2-8.2,65.6-278.8,59.4-287c-4.1-2.1-194.7,96.3-426.3,219.3c-405.8,215.2-424.3,223.4-549.3,223.4H2528l30.7-55.3c63.5-120.9,166-190.6,643.6-444.8c272.6-143.5,496-264.4,498.1-264.4c0-2.1,38.9-246,88.1-541.1l86.1-539.1h-231.6h-231.6v-194.7v-194.7h1598.8H6609v194.7v192.7l-231.6,6.2l-231.6,6.1l90.2,553.4l90.2,553.4l461.2,246c344.3,184.5,481.7,268.5,541.1,332.1c120.9,131.2,110.7,155.8-57.4,145.5c-129.1-10.2-166-24.6-504.2-207C6566,14.6,6400-73.6,6395.9-73.6c-8.2,0,45.1,264.4,59.5,287c4.1,8.2,227.5,143.5,494,299.3c369,215.2,504.3,307.5,573.9,383.3c141.4,157.8,116.9,186.5-114.8,129.1c-73.8-16.4-248-106.6-500.1-256.2c-213.1-125-389.5-227.5-391.5-227.5s6.2,55.3,20.5,125c16.4,75.8,41,135.3,63.5,151.7c22.6,14.3,278.8,217.3,571.9,448.9c508.4,405.9,623.1,516.5,672.3,653.9c16.4,47.1-28.7,45.1-174.2-4.1c-88.2-30.7-221.4-125-567.8-399.7c-248-198.8-457.1-360.8-461.2-360.8c-2.1,0,18.5,118.9,47.2,266.5l53.3,266.5l368.9,369l369,369h-98.4h-96.4v106.6v108.6l-233.7-233.7L6816.1,2175l-164,153.7c-90.2,86.1-207,182.4-258.3,213.2c-51.3,32.8-92.2,71.7-92.2,86.1c0,14.4,41,149.6,92.2,303.4c51.2,153.7,90.2,284.9,84,289c-4.1,4.1-47.1-10.2-94.3-34.8l-84-43.1l-32.8,82c-18.5,47.1-39,84-45.1,84c-8.2,0-55.3-123-104.5-274.7l-92.2-274.7l-123,51.2c-155.8,65.6-450.9,141.4-629.2,159.9l-139.4,14.4v254.2c0,139.4-4.1,254.2-10.2,254.2c-6.1,0-36.9-30.7-69.7-65.6l-61.5-67.6l-67.6,67.6c-38.9,34.8-73.8,65.6-77.9,65.6C4840.1,3493,4836,3378.2,4838.1,3238.8z M5317.7,2445.6c381.3-47.1,721.5-219.3,893.7-455c49.2-67.6,96.4-141.4,102.5-166c8.2-32.8-483.7-2814.3-578-3275.5l-12.3-57.4h-713.3H4297l-12.3,57.4c-94.3,461.2-586.2,3242.7-578,3275.5c6.2,24.6,53.3,98.4,102.5,166C4073.5,2351.3,4661.8,2529.6,5317.7,2445.6z" />

                                <path d="M4887.3,1582.6c-59.4-104.5-116.8-200.9-127.1-215.2c-12.3-16.4-71.7,10.2-202.9,90.2c-100.4,63.5-188.6,108.6-194.7,104.5c-8.2-8.2,69.7-307.5,147.6-573.9c10.3-34.8,51.2-36.9,500.1-36.9c448.9,0,489.9,2.1,500.1,36.9c77.9,266.5,155.8,565.7,147.6,573.9c-6.1,4.1-94.3-41-194.7-104.5c-131.2-79.9-190.6-106.6-202.9-90.2c-10.2,14.4-67.7,110.7-127.1,215.2c-59.4,102.5-114.8,188.6-123,188.6C5002.1,1771.2,4946.7,1685.1,4887.3,1582.6z" />

                                <path d="M2421.4-963.1c-61.5-186.5-106.6-342.3-100.4-348.5c14.4-16.4,1305.7-16.4,1320-2.1c6.1,6.1-20.5,143.5-57.4,303.4c-38.9,159.9-73.8,311.6-79.9,338.2l-10.2,45.1h-479.6h-479.6L2421.4-963.1z" />

                                <path d="M6527.1-633.1c0-4.1-32.8-151.7-71.7-328c-39-176.3-71.7-330-71.7-342.3c0-22.5,1293.4-30.8,1316-8.2c6.1,6.1-38.9,161.9-100.4,348.5L7486.3-627h-479.6C6742.3-627,6527.1-629,6527.1-633.1z" />

                                <path d="M2759.6-1543.2c-16.4-30.8-735.9-1754.6-774.8-1857.1c-12.3-32.8,30.7-34.9,594.4-34.9H3186v963.4v963.4h-205C2808.8-1508.4,2774-1514.5,2759.6-1543.2z" />

                                <path d="M6834.5-2471.7v-963.4h604.7c332.1,0,604.7,6.1,602.6,16.4c0,8.2-178.3,438.6-393.5,957.2l-393.6,942.9l-211.1,6.1l-209.1,6.2V-2471.7z" />

                                <path d="M3411.5-2932.9v-768.7l-885.5-4.1l-887.5-6.1l-96.3-194.7c-51.2-106.6-96.3-200.9-96.3-209.1c-2.1-10.2,440.7-16.4,981.8-16.4h983.9v-123v-123H2239H1064.5l-108.6-205l-108.6-205l92.2-2c51.2,0,1869.4,0,4040,0s3997,0,4060.5,0l112.7,2l-108.6,205l-108.7,205H7773.3H6609v123v123h973.6h973.6l-28.7,65.6c-14.3,36.9-59.4,133.2-96.3,211.1l-69.7,143.5l-875.2,6.1l-877.3,4.1v768.7v768.7H5010.3H3411.5V-2932.9z" />

                            </g>

                        </g>
                    </svg>
                    <p>Throne</p>
                </a>

            </div>
            <a className='flex flex-col items-center font-bold text-white p-3 bg-purple-800 rounded-xl mt-5' href='https://www.twitch.tv/higuvt/'>
                <svg className='w-6 h-6' fill='#FFFFFF' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
                <p>Twitch</p>
            </a>
        </div>
    )
}

export default Socials