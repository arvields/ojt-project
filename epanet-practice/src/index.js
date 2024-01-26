import "./styles.css";

import { Project, Workspace } from "epanet-js";
import fs from "fs";

// Read an existing inp file from the disk
const net1 = fs.readFileSync("net1.inp");

// Initialise a new Workspace and Project object
const ws = new Workspace();
const model = new Project(ws);

// Write a copy of the inp file to the workspace
ws.writeFile("net1.inp", net1);

// Runs toolkit methods: EN_open, EN_solveH & EN_close
model.open("net1.inp", "report.rpt", "out.bin");
model.solveH();
model.close();

const reportFile = ws.readFile("report.rpt");
document.getElementById("epanet-report").innerHTML = reportFile;
