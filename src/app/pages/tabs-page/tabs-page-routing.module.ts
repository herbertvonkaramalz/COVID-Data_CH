import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs-page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "switzerland",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../switzerland/switzerland.module").then(
                (m) => m.SwitzerlandPageModule
              ),
          },
        ],
      },
      {
        path: "cantons",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../cantons/cantons.module").then(
                (m) => m.CantonsPageModule
              ),
          },
        ],
      },
      {
        path: "symptoms",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../symptoms/symptoms.module").then(
                (m) => m.SymptomsPageModule
              ),
          },
        ],
      },
      {
        path: "about",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../about/about.module").then((m) => m.AboutModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/app/tabs/switzerland",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
