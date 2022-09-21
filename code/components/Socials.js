import TwitterLogoBlack from 'Images/Twitter_Logo_Black.png'
import LinkedinLogoBlack from 'Images/LinkedinLogoBlack.png'
import YouTubeLogoBlack from 'Images/YouTubeLogoBlack.png'
import React from 'react'

export const Socials = () => (
	<div css="width: 200px; margin-left: 11px;">
        <div css="width: 40px; display: inline-block; box-shadow: 8px 0px 9px -6px lightgrey; margin-right: 15px">
            <ul>
                <li>
                    <a href="https://twitter.com/fab_mob" title="twitter">
                        <img css="width: 1rem" src={TwitterLogoBlack} alt="twitter" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/company/fabmob/"
                        title="linkedin"
                    >
                        <img css="width: 1rem" src={LinkedinLogoBlack} alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/channel/UC7jt1WuLQbb15ois1PQ-clw"
                        title="YouTube"
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
                <li css="font-weight: bold"><a href='https://us12.list-manage.com/subscribe?u=7e792185ad77b9a84eaaa62e9&id=7c902a8341' target="_blank">Recevez notre newsletter !</a></li>
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