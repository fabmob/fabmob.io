import LinkedinLogoBlack from 'Images/LinkedinLogoBlack.png'
import YouTubeLogoBlack from 'Images/YouTubeLogoBlack.png'
import React from 'react'

export const Socials = () => (
	<div css="width: 200px; margin-left: 11px;">
        <div css="width: 40px; display: inline-block; box-shadow: 8px 0px 9px -6px lightgrey; margin-right: 15px">
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/company/fabmob/"
                        title="linkedin"
                        target="_blank"
                    >
                        <img css="width: 1rem" src={LinkedinLogoBlack} alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/channel/UC7jt1WuLQbb15ois1PQ-clw"
                        title="YouTube"
                        target="_blank"
                    >
                        <img
                            css="width: 1rem"
                            src={YouTubeLogoBlack}
                            alt="notre chaîne youtube"
                        />
                    </a>
                </li>
            </ul>
        </div>
        <div css="display: inline-block; font-size: 12px; width: 130px; line-height: 17px;">
            <ul>
            https://9fb3d644.sibforms.com/serve/MUIFAOQnFNyyn5Kfp1XK5ABDzukRh5tKyEbrTQB6dOdyfYuuF16pfrR-fjQufFYb54qVx7OqaIRBObnP9XBEdusublka34mZZI3Acb5rgABffvu8v_nSLhgje1HvyLFKMzNI6oYvm8hw1VKkS4lQoNaNW5N9rS1BYmSZYNXV609gQB0OtlOihK245-CPP3umEORQf5A46z-HVWWC<li css="font-weight: bold"><a href='https://9fb3d644.sibforms.com/serve/MUIFAAwp3DpKgE3gjcYj9lGZh9o0M1_c69PSJPmrfHubtit_ODqdvV09HmILB6qeK1sjOdvTnu7QvVgoWq_g3xfPGr1VM8eQr-6CuUKtAva725vcplAqvFF2mfzsfHNS9kxD-vzVDh64hu-WYkMbwzWb0WnkXttwfI19BvL86JEfmbX7b3SNy0U8apI2O98V3lf0ccAqoBE3daobhttps://9fb3d644.sibforms.com/serve/MUIFAMbmg2v4o1ILyWKZ-nBaYV99J1gLd97l9wjB3w5MG5aVsw9PTmECMO5sHlFlD5RapOVWr4sVdWEJjOgWMAYKRhBq64LDN7Z9jplkq0gl_q8-jklxo6sMXCkqsEg8ALkdUxgStd1Oi-D7kZkgleIZN3KrSMj5F7mMOAJ9BIhQ6xrvuITgeEk28uhkm_WYaVLYHDKaYXKkc45o' target="_blank">Recevez notre newsletter !</a></li>
                <li><EmailContact /></li>
                <li><a href='/à-propos/mentions-légales-et-données'>Mentions légales</a></li>
            </ul>
        </div>
    </div>
)
export const EmailContact = () => (
	<a
		href="mailto:contact@fabmob.io"
		title="courriel"
	>
		Contact
	</a>
)