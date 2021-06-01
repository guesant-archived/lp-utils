import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DescriptionIcon from "@material-ui/icons/Description";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import clsx from "clsx";
import { IDirDef } from "js-utils/build/types/IDirDef";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

export type IRenderDirDefProps = {
  dirdef: IDirDef;
  initiallyExpanted?: boolean;
  propagateInitiallyExpanded?: boolean;
};

function RenderItemFolderName({
  toggle,
  dirdef,
  isExpanded,
}: {
  toggle: any;
  dirdef: IDirDef;
  isExpanded: boolean;
}) {
  return (
    <>
      <ListItem dense button className="tw-px-0 tw-py-0" onClick={toggle}>
        <ListItemIcon>
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          <div className="tw-ml-2 tw-mr-3">
            {isExpanded ? <FolderOpenIcon /> : <FolderIcon />}
          </div>
        </ListItemIcon>
        <ListItemText primary={dirdef.name} />
      </ListItem>
      <Divider />
    </>
  );
}

function RenderItemFile({ filename }: { filename: string }) {
  return (
    <>
      <ListItem dense button>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary={filename} />
      </ListItem>
      <Divider />
    </>
  );
}

function RenderDirDef({
  dirdef,
  initiallyExpanted,
  propagateInitiallyExpanded,
}: IRenderDirDefProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasPrevExpanded, setHasPrevExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) setHasPrevExpanded(true);
  }, [isExpanded]);

  useEffect(() => {
    setIsExpanded(Boolean(initiallyExpanted));
  }, []);

  function toggle() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div style={{ width: "100%" }}>
      {dirdef.name && (
        <RenderItemFolderName
          toggle={toggle}
          dirdef={dirdef}
          isExpanded={isExpanded}
        />
      )}
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" dense disablePadding>
          {(isExpanded || hasPrevExpanded) && (
            <div className={clsx("tw-w-full", dirdef.name && "tw-pl-4")}>
              <div className="tw-flex tw-flex-col">
                {dirdef.dirs.map((dir) => (
                  <RenderDirDef
                    dirdef={dir}
                    key={dir.name ?? nanoid()}
                    {...(propagateInitiallyExpanded
                      ? { initiallyExpanted, propagateInitiallyExpanded }
                      : {})}
                  />
                ))}
              </div>
              <List dense component="nav" aria-label="main mailbox folders">
                {dirdef.files.map((name) => (
                  <RenderItemFile filename={name} key={name} />
                ))}
              </List>
            </div>
          )}
        </List>
      </Collapse>
    </div>
  );
}

export default RenderDirDef;
