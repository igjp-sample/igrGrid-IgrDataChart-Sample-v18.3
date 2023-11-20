//ダミーの名前リスト
export const Names: any[] = [
    '保坂 獅童','広田 サダヲ','笠井 浩正','畠山 徹','杉本 圭','樋口 真帆','柴咲 あい','丹野 貴美子','山内 雅之','鶴田 聖陽','香川 あさみ','脇田 仁晶','岸本 恵子','寺本 愛梨','平井 恵梨香','古田 恵美','今井 有起哉','村山 莉央','豊田 直人','牧田 友也'
]
//所属チームリスト
export const Teams: any[] = [
    'レッド', 'ブルー', 'グリーン'
]

//グリッドに与えるデータモデル
interface item {
  id: number,
  name: string,
  team: string,
  score: number,
  created: Date
}

export class SampleDataService {
  public static generateData(): item[] {
    const data: item[] = [];
    const date = new Date();
    for (let i = 0; i < Names.length; i++) {
      const name = this.randomNoRepeats(Names);
      const selectedTeam = this.randomNoRepeats(Teams);
      let item:item = {
        id: i + 1,
        name: name,
        team: selectedTeam,
        score: Math.floor(Math.random() * 249 + 750),
        created: date
      }
      data.push(item);
    }
    console.log(data);
    return data;
  }
  public static randomNoRepeats(array: any[]): string {
    var copy = array.slice(0);
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  }
}