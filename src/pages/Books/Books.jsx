import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBook/ListedReadList';
import ListedWishList from '../../components/listedBook/listedWishList';

const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext)
    console.log(storedBooks, wishList, "bookContext")
    return (
        <div className=' container mx-auto'>

            <Tabs>
                <TabList>
                    <Tab>Read list</Tab>
                    <Tab>Wish list</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;