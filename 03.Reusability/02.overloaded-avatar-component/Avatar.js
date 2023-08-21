import React from "react"
import { IoPersonSharp } from "react-icons/io5"
import classnames from "classnames"; 

/**
 * A flexible Avatar component!
 * 
 * Each of the 3 different avatars will have a 
 * wrapper div with the classes below:
 * 
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 * 
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 * 
 * 
 * Randomize the background color of the non-image
 * avatars. The styles.css has some pre-written
 * color classes to add to the wrapper div.
 */

export default function Avatar({children, src, alt, bg}) {

    let allClassesForInitial = classnames("avatar", "avatar-letters", bg)
    let allClassesForAnonymous = classnames("avatar", "avatar-icon", bg)
    return (
        <>
            {/* photo version */}
            {src && <div className="avatar"> 
                <img src={src} alt={alt}/>
            </div>
            }
            
            {/* initials version */}
            {children && <div className={allClassesForInitial}>{children}</div>}
            
            {/* anonymous version */}
            {!src && !children && 
            (
                <div className={allClassesForAnonymous}>
                    <IoPersonSharp />
                </div>
            )
            }
        </>
    )
}