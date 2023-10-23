import './comps.css';
import Card from './card';

function Container(){

    return (
        <div class="flex-container">
           <Card title="Test" desc = "TeEEEESSTasdfasdf" />
           <Card title="Test" desc = "TeEEEESST" />
           <Card title="Test" desc = "TeEEEESST" />
           <Card title="Test" desc = "TeEEEESST" />
           <Card title="Test" desc = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz" />
           <Card title="Test" desc = "TeEEEESST" />
           <Card title="Test" desc = "TeEEEESST" />
        </div>
    )

}

export default Container;