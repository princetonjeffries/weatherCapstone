import { Container } from 'react-bootstrap'
import StoryRow from './Stories/StoryRow'
//Container imported from react bootstrap and story row component imported

const Stories = () => {
    return (
        <Container id='stories-container' fluid='sm'>
        {/* container component with fluid set as sm */}
            <StoryRow src1='https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/8/aa/8aa8d6ae-f800-11e3-b04f-0019bb2963f4/53a36338202d7.image.jpg' date1='5/19/2021' title1='Lightning Strike in Prescott' text1='During the rainstorm in Prescott, orginated in Flagstaff, a lightning strike cut off power in several neighborhoods. The lack of power lasted from 1 to 2 hours in each neighborhood.' src2='https://bloximages.newyork1.vip.townnews.com/kptv.com/content/tncms/assets/v3/editorial/9/49/94947516-5a7e-11e9-8f83-972fbdbdce48/5cac1d3e889b9.image.jpg?resize=400%2C225' date2='5/19/2021' title2='Prescott Residence Taking Advantage After Rainstorm' text2='After the flooding in Prescott, conceived from a rainstorm that went far beyond the predicted forecast.' src3='https://bloximages.chicago2.vip.townnews.com/eastvalleytribune.com/content/tncms/assets/v3/editorial/4/22/42238bea-d0d1-11df-934c-001cc4c03286/4caba8de43aa5.image.jpg' date3='5/22/2021' title3='High Wind in Tucson' text3="Over the past couple of days, Tucson has been experiencing some immense wind, not enough to cause severe damage, so far. However, it's recommended citizens remain indoors for their safety." />
            {/* story row component set with three numbered src props, three numbered date props, three numbered title props, and three numbered text props, with each src set as an image url and everything else set as my desired text */}
            <StoryRow src1='https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/b/df/bdf89794-2674-11ea-9461-b73cd735eec7/5dd6f714a782e.image.jpg?resize=1200%2C800' date1='5/18/2021' title1='Showers in Northern Arizona' text1='There have been consistent showers in Flagstaff Arizona. The weather is set to move to near Prescott, whilst gradually developing into a rainstorm.' src2='https://www.tripsavvy.com/thmb/5ghD8fTqiSM6CEgu8A1rd06e9wA=/3939x2216/smart/filters:no_upscale()/sunset-with-rain-and-lightning-145101813-58e656de5f9b58ef7eae39e3.jpg' date2='5/16/2021' title2='Before Monsoon Season Arrives...' text2="Moonsoon season is soon to arrive. To prepare, we'd like you to keep in mind that you should always check the weather forecast before driving and wait out an potential storms, as they often pass by quickly. With slick roads and low visibility from monsoon weather, it's only best that you try to avoid the risk." src3='https://www.after55.com/blog/wp-content/uploads/2017/12/phoenix-arizona-downtown-720.jpg' date3='5/14/2021' title3='Temperatures Starting to Hit 100 Degrees in Phoenix' text3='Phoenix has been consistently seeing 100 degrees Fahrenheit over the last few weeks and is set to go above that in just a few weeks.' />
            {/* story row component set with three numbered src props, three numbered date props, three numbered title props, and three numbered text props, with each src set as an image url and everything else set as my desired text */}
        </Container>
    )
}

export default Stories
