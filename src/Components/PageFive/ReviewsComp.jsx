import React from 'react'
import styled from 'styled-components';
import { fourBoxesForUser } from './PageFiveAssets'

const ReviewsComp = ({ howmanyReviews }) => {


    return (
        <StyledProductReviews>
            <h3>{howmanyReviews.howManyReviews}</h3>

            <div id="UserProfDetailsProductReviews">
                <div id="profImg">
                    <img src={howmanyReviews.userProfPic} alt="Profile" />
                </div>
                <div id="AfterProfImgDetails">
                    <div id="starswithuserprof">
                        {[...Array(5)].map((_, index) => <img src={howmanyReviews.starIcon} alt={`${index} star man`} />)}
                        <p>{howmanyReviews.textWithStar}</p>
                    </div>
                    <p>{howmanyReviews.profNamewithReview}</p>
                </div>

            </div>

            <div id="UserCommentsAndMessages">

                <div className="userCommentOne">
                    <p>{howmanyReviews.userCommentone}</p>
                </div>

                <div className="userCommentTwo">
                    <p>{howmanyReviews.userCommentTwo}</p>
                </div>

                <div id="relatedPics">
                    {[...Array(4)].map((_, index) => <div key={index} className='relatedProducts'>asas</div>)}
                </div>
            </div>

            <div id="HelpFulOrAbuse">
                <button type="button">Helpful</button>
                <button type="button">Report abuse</button>
            </div>
        </StyledProductReviews>
    )
}

export default ReviewsComp

const StyledProductReviews = styled.div`
    margin: 3rem 0 !important;
    display:flex;
    flex-direction:column;
    align-items:start;
    gap:2rem;

    h3:nth-child(1){
        font-size:1rem;
        margin: 1.5rem 0 !important;
    }

    #UserProfDetailsProductReviews{
            display:flex;
            align-items:center;
            justify-content:start;
            gap:2rem;

        #profImg>img{
            width:6rem;
            height:auto;
        }

        #AfterProfImgDetails{
            display:flex;
            flex-direction:column;
            gap:1rem;
            align-items:start;
        }

        #starswithuserprof{
            display:flex;
            align-items:center;
            justify-content:start;
            gap:.5rem;

            img{
                width:1rem;
                height:auto;
            }
        }
    }    

    #UserCommentsAndMessages{
        display:flex;
        flex-direction:column;
        align-items:start;
        gap:2rem;

        #relatedPics{
            display:flex;
            align-items:center;
            justify-content:start;
            flex-direction:row;
            gap:1rem;            

            .relatedProducts{
                width:5rem;
                height:5rem;
                border-radius:6px;
                background-color:${fourBoxesForUser};
            }
        }        
    }

    #HelpFulOrAbuse{
        display:flex;
        align-items:center;
        justify-content:start;
        gap:2rem;

        >button{
            border:none;
            border: 2px solid #EAEAEA;
            box-shadow: 0px 5px 20px 0px #F5C34B26;
            border-radius:6px;
            width:7rem;
            height:3rem;
            font-size:.8rem;
            background-color:inherit;
        }
        >button:nth-child(2){
            border:none;
            color: #626974;
        }
        

    }
`;