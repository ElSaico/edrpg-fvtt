interface Rank {
   name: string;
   maxRankPoints: number;
   skillCap: number;
   karmaPoints: number;
   karmaCap: number;
   endurance: number;
}

interface Skills {
   [category: string]: string[];
}

interface EDRPG {
   ranks: Rank[];
   skills: Skills;
}